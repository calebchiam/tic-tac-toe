import React from "react";
import { Text } from "@chakra-ui/react";

interface ConclusionMessageProps {
  winner: string;
}
const ConclusionMessage = (props: ConclusionMessageProps) => {
  const { winner } = props;
  switch (winner) {
    case "0":
      return <Text>Player 1 has won!</Text>;
    case "1":
      return <Text>Player 2 has won!</Text>;
    case "draw":
      return <Text>Game has ended in a draw.</Text>;
  }
};

export default ConclusionMessage;
