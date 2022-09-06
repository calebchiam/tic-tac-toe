import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface HistoryModalProps {
  history: string[];
  isOpen: boolean;
  onClose: VoidFunction;
}

const HistoryModal = (props: HistoryModalProps) => {
  const { history, isOpen, onClose } = props;
  console.log("history", history);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Game history</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>Result</Th>
                </Tr>
              </Thead>
              <Tbody>
                {history.map((result, idx) => {
                  return (
                    <Tr key={idx}>
                      <Td>{idx + 1}</Td>
                      {result === "0" && <Td>Player 1 won.</Td>}
                      {result === "1" && <Td>Player 2 won.</Td>}
                      {result === "draw" && <Td>Game ended in a draw.</Td>}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;
