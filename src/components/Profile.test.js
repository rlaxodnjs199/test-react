import { render, screen } from '@testing-library/react'
import Profile from './Profile'

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username='twkim' name='twtw' />);
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props properly', () => {
        render(<Profile username="twkim" name='twtw' />);
        screen.getByText('twkim')
        screen.getByText('twtw')
        screen.getAllByText(/tw/);
    })
})