import React from "react";
import { Button, ButtonProps, HStack } from "@chakra-ui/react";

interface ControlButtonProps extends ButtonProps {
  buttonText: string;
}

const ControlButton = (props: ControlButtonProps) => {
  const { buttonText, ...buttonProps } = props;
  return (
    <Button colorScheme={"teal"} size={"lg"} {...buttonProps}>
      {buttonText}
    </Button>
  );
};

interface ControlsProps {
  gameActive: boolean;
  winner: string | null;
  setGameActive: any;
  setBoard: any;
  setShowHistoryModal: any;
}

const Controls = (props: ControlsProps) => {
  const { gameActive, setGameActive, winner, setBoard, setShowHistoryModal } =
    props;
  const showRestart = !gameActive && winner;

  return (
    <HStack>
      <ControlButton
        buttonText={showRestart ? "Restart" : "Start"}
        onClick={() => {
          if (showRestart) {
            setBoard({
              0: { 0: "", 1: "", 2: "" },
              1: { 0: "", 1: "", 2: "" },
              2: { 0: "", 1: "", 2: "" },
            });
          }
          setGameActive(true);
        }}
        isDisabled={gameActive}
      />
      <ControlButton
        buttonText={"History"}
        onClick={() => setShowHistoryModal(true)}
      />
    </HStack>
  );
};

export default Controls;
