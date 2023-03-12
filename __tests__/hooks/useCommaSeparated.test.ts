import { renderHook, act } from "@testing-library/react-hooks";
import { useCommaSeparated } from "../../app/core/customHooks";

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
