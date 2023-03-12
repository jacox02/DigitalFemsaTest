import { render, screen, cleanup } from '@testing-library/react-native';
import Button from "../../../app/components/atoms/Button";
afterEach(cleanup);

describe("Tests Button component", () => {
  it("Should render Ganados button ", () => {
    const mockFn = jest.fn();
    let title = 'Ganados'
    render(<Button title={title} onPress={mockFn} />);
    const foundButtons = screen.getAllByTestId(`test-${title}-button`);
    expect(foundButtons.length).toBeGreaterThanOrEqual(1);
  });
  it("Should render Canjeados button ", () => {
    const mockFn = jest.fn();
    let title = 'Canjeados'
    render(<Button title={title} onPress={mockFn} />);
    const foundButtons = screen.getByTestId(`test-${title}-button`);

    expect(foundButtons).toBeOnTheScreen()
  });

  it("Should render Todos button ", () => {
    const mockFn = jest.fn();
    let title = 'Todos'
    render(<Button title={title} onPress={mockFn} />);
    const foundButtons = screen.getByTestId(`test-${title}-button`);
    expect(foundButtons).toBeOnTheScreen();
  });
});
