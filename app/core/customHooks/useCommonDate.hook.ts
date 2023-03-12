import { useEffect, useState } from "react";

export const useCommonDate = (inputDate: string) => {
  const [outputString, setOutputString] = useState("");
  if (inputDate == "") {
    inputDate = new Date().toISOString();
  }
  useEffect(() => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    setOutputString(`${day} de ${month}, ${year}`);
  }, [inputDate]);

  return outputString;
};
