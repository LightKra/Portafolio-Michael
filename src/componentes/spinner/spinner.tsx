import React from "react";
import { PulseLoader } from "react-spinners";
import type { SpinnerProps } from "../../types/types";

export const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
    return (
       <PulseLoader className="spinner" size={size} color={color} />
    );
}