import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import Violations from '../Violations';

describe('Home', () => {
  test('renders Home component', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  it('navigates to the ppe violations page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PPE_violations" element={<Violations />} />
        </Routes>
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', {
      name: /pages.goTo/i,
    });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/PPE_violations');

    const user = userEvent.setup();
    await user.click(linkElement);

    const violationPage = await screen.findByTestId('violation_page');
    expect(violationPage).toBeInTheDocument();
  });
});
