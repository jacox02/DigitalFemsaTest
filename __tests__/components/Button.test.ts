import React from "react";
import Button from "../../app/components/atoms/Button";
import { render } from "@testing-library/react-native";

describe("Tests Button componet", () => {
  it("should call onPress when the button is pressed", () => {
    const { getByTestId } = render(<Button/>);
  });
});
