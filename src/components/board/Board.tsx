import React from "react";
import { Box, Flex, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { BoardProps, turnToSymbol } from "./Board.types";
import { renderCell } from "./Board.helpers";

const Board = (props: BoardProps) => {
  const { board, setBoard, gameActive, playerTurn, changePlayerTurn } = props;
  const boardBorderColor = useColorModeValue("gray.800", "gray.200");
  const boardBgColor = useColorModeValue("gray.50", "gray.600");

  const handleCellClick = (playerTurn, rowIdx, colIdx) => {
    if (!["x", "o"].includes(board[rowIdx][colIdx])) {
      setBoard({
        ...board,
        [rowIdx]: { ...board[rowIdx], [colIdx]: turnToSymbol[playerTurn] },
      });
      changePlayerTurn();
    }
  };

  return (
    <Box h={"500px"} w={"500px"}>
      <VStack h={"100%"} w={"100%"} spacing={0}>
        {[0, 1, 2].map((rowIdx) => (
          <HStack h={"33%"} w={"100%"} spacing={0} key={rowIdx}>
            {[0, 1, 2].map((colIdx) => {
              console.log("row is", board[rowIdx]);
              return (
                <Flex
                  key={`${rowIdx},${colIdx}`}
                  w={"33%"}
                  h={"100%"}
                  borderColor={boardBorderColor}
                  borderWidth={"1px"}
                  justify={"center"}
                  align={"center"}
                  bgColor={!gameActive ? "gray.400" : boardBgColor}
                  onClick={() =>
                    gameActive
                      ? handleCellClick(playerTurn, rowIdx, colIdx)
                      : null
                  }
                  fontSize={"100px"}
                >
                  {renderCell(board[rowIdx][colIdx])}
                </Flex>
              );
            })}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Board;
