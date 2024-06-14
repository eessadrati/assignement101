import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Contractors from '../Contractors';
import Violations from '../Violations';

describe('Contractors', () => {
  test('renders Contractors component', () => {
    const { container } = render(
      <MemoryRouter>
        <Contractors />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  it('navigates to the ppe violations page', async () => {
    render(
      <MemoryRouter initialEntries={['/contractors']}>
        <Routes>
          <Route path="/contractors" element={<Contractors />} />
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
