import { renderHook } from "@testing-library/react-hooks";
import { useCommonDate } from "../../app/core/customHooks";
//ERROR: La libreria que use para probar los hooks no funciona con la version de React que estoy usando, la unica forma que encontre para poder instalarla fue user --force al momento de la instalacion, cosa que considero incorrecta, sin embargo, para los propositos la use y funcionaron las pruebas
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
