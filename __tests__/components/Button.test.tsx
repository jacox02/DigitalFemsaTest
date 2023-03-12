import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from "../../app/components/atoms/Button";

describe("Tests Button component", () => {
  it("Should render Ganados button ", () => {
    const mockFn = jest.fn();
    let title ='Ganados'
    render(<Button title={title} onPress={mockFn} />);
    const foundButtons = screen.getAllByTestId(`test-${title}-button`);
    expect(foundButtons.length).toBeGreaterThanOrEqual(1);
  });
  it("Should render Canjeados button ", () => {
    const mockFn = jest.fn();
    let title = 'Canjeados'
    render(<Button title={title} onPress={mockFn} />);
    const foundButtons = screen.getAllByTestId(`test-${title}-button`);
    expect(foundButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("Should render Todos button if we click one of the previous buttons", () => {
    const mockFn = jest.fn();
    let title = 'Todos'
    render(<Button title={title} onPress={mockFn} />);
    const foundButtons = screen.getAllByTestId(`test-${title}-button`);
    expect(foundButtons.length).toBeGreaterThanOrEqual(1);
  });
});
