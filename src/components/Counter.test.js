import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe('<Counter />', () => {
    it('matches snapshot', () => {
        const utils = render(<Counter />)
        expect(utils).toMatchSnapshot();
    })
    it('has a initial counter and two buttons', () => {
        render(<Counter />);
        screen.getByText('0');
        screen.getByText('+1');
        screen.getByText('-1');
    })
    it('increases', () => {
        render(<Counter />);
        const number = screen.getByText('0');
        const plusButton = screen.getByText('+1');
        userEvent.click(plusButton);
        userEvent.click(plusButton);
        expect(number).toHaveTextContent('2');
        expect(number.textContent).toBe('2');
        expect(number.textContent).not.toBe('3');
    })
    it('decreases', () => {
        render(<Counter />);
        const number = screen.getByText('0');
        const minusButton = screen.getByText('-1');
        userEvent.click(minusButton);
        userEvent.click(minusButton);
        expect(number).toHaveTextContent('-2');
    })
})