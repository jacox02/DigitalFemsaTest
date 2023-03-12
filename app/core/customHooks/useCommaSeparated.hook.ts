import { useState, useEffect } from "react";

export const useCommaSeparated = (inputString: string): string => {
  const [outputString, setOutputString] = useState("");

  useEffect(() => {
    const parts = inputString.toString().split(".");
    const separatedString = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setOutputString(separatedString);
  }, [inputString]);

  return outputString;
};
