import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PPEs from '../PPEs';
import userEvent from '@testing-library/user-event';
import Violations from '../Violations';

describe('PPEs', () => {
  test('renders PPEs component', () => {
    const { container } = render(
      <MemoryRouter>
        <PPEs />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  it('navigates to the PPE violations page', async () => {
    render(
      <MemoryRouter initialEntries={['/PPEs']}>
        <Routes>
          <Route path="/PPEs" element={<PPEs />} />
          <Route path="/PPE_violations" element={<Violations />} />
        </Routes>
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /pages.goTo/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/PPE_violations');

    const user = userEvent.setup();
    await user.click(linkElement);

    const violationPage = await screen.findByTestId('violation_page');
    expect(violationPage).toBeInTheDocument();
  });
});
