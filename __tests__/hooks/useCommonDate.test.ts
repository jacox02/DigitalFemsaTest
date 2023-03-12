import { renderHook } from "@testing-library/react-hooks";
import { useCommonDate } from "../../app/core/customHooks";

describe("useCommaSeparated tests", () => {
  let date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  it("Should return a date formated on 'DD de MM, YYYY'", () => {
    const { result } = renderHook(() =>
      useCommonDate("2022-12-09T06:34:25.607Z")
    );
    expect(result.current).toBe("9 de Dec, 2022");
  });

  it("If we give a empty string as argument, it returns the current date formated", () => {
    const { result } = renderHook(() => useCommonDate(""));
    expect(result.current).toBe(`${day} de ${month}, ${year}`);
  });
});
