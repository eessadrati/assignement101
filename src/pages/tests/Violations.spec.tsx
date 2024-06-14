import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PPEs from '../PPEs';

describe('Violations', () => {
  test('renders Violations component', () => {
    const { container } = render(
      <MemoryRouter>
        <PPEs />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });
});
