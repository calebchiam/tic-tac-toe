import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Board from "./components/board/Board";
import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import { ConclusionState, isGameFinished } from "./utils/logic";
import ConclusionMessage from "./components/conclusionMessage/ConclusionMessage";
import HistoryModal from "./components/historyModal/HistoryModal";

export const App = () => {
  const [board, setBoard] = useState({
    0: { 0: "", 1: "", 2: "" },
    1: { 0: "", 1: "", 2: "" },
    2: { 0: "", 1: "", 2: "" },
  });
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [playerTurn, setPlayerTurn] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [history, setHistory] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const changePlayerTurn = () => {
    setPlayerTurn(1 - playerTurn);
  };

  useEffect(() => {
    const conclusion: ConclusionState = isGameFinished(board);
    if (conclusion.finished) {
      const winner = conclusion.winner;
      if (winner) {
        setGameActive(false);
        setWinner(winner);
        setHistory([...history, winner]);
      }
    }
  }, [board]);

  return (
    <ChakraProvider theme={theme}>
      <VStack w={"100vw"} h={"100vh"}>
        <HistoryModal
          history={history}
          isOpen={showHistoryModal}
          onClose={() => setShowHistoryModal(false)}
        />
        <Flex justify={"flex-end"} w={"100%"}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <VStack w={"100%"} justify={"center"}>
          <Board
            board={board}
            setBoard={setBoard}
            gameActive={gameActive}
            playerTurn={playerTurn}
            changePlayerTurn={changePlayerTurn}
          />
          <Controls
            gameActive={gameActive}
            winner={winner}
            setGameActive={setGameActive}
            setBoard={setBoard}
            setShowHistoryModal={setShowHistoryModal}
          />
          {/*<Text>Game is active: {gameActive.toString()}</Text>*/}
          {gameActive && (
            <Text>
              It is currently{" "}
              <chakra.span fontWeight={600}>
                Player {playerTurn + 1}'s
              </chakra.span>{" "}
              turn!
            </Text>
          )}
          {!gameActive && winner && <ConclusionMessage winner={winner} />}
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};
