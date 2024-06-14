import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Violations from '../Violations';
import userEvent from '@testing-library/user-event';
import Workers from '../Workers';

describe('Workers', () => {
  it('renders Workers component', () => {
    const { container } = render(
      <MemoryRouter>
        <Workers />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  it('navigates to the ppe violations page', async () => {
    render(
      <MemoryRouter initialEntries={['/workers']}>
        <Routes>
          <Route path="/workers" element={<Workers />} />
          <Route path="/PPE_violations" element={<Violations />} />
        </Routes>
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', {
      name: /pages.goTo/i,
    });
    expect(linkElement).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(linkElement);

    const violationPage = await screen.findByTestId('violation_page');
    expect(violationPage).toBeInTheDocument();
  });
});
