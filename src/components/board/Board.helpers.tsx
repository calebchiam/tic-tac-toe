import { GiCircleClaws, GiCrossedBones } from "react-icons/gi";
import React from "react";

export const renderCell = (value) => {
  switch (value) {
    case "x":
      return <GiCrossedBones />;
    case "o":
      return <GiCircleClaws />;
    case "":
      return <></>;
  }
};
