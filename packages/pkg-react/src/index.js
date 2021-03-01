import * as React from "react";
import { bar } from "pkg-ts";

export const Button = ({ children }) => {
  return (
    <button>
      {children} and {bar}!!
    </button>
  );
};
