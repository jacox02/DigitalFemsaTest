import { renderHook, act } from "@testing-library/react-hooks";
import { useCommaSeparated } from "../../app/core/customHooks";
//ERROR: La libreria que use para probar los hooks no funciona con la version de React que estoy usando, la unica forma que encontre para poder instalarla fue user --force al momento de la instalacion, cosa que considero incorrecta, sin embargo, para los propositos la use y funcionaron las pruebas
describe("useCommaSeparated tests", () => {
  it("Should return 1,000 if we set 1000 as argument", () => {
    const { result } = renderHook(() => useCommaSeparated("1000"));
    expect(result.current).toBe("1,000");
  });

  it("Should return 0 if we set 0 as argument", () => {
    const { result } = renderHook(() => useCommaSeparated("0"));
    expect(result.current).toBe("0");
  });
});
