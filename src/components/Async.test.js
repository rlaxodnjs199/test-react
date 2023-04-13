import { render, screen } from "@testing-library/react";
import DelayedToggle from "./Async";
import userEvent from "@testing-library/user-event";

describe('Async testing', () => {
    it('reveals text when toggle is ON', async () => {
        render(<DelayedToggle />)
        const toggleButton = screen.getByText('토글');
        userEvent.click(toggleButton);
        await screen.findByText('야호!!')
    })
})