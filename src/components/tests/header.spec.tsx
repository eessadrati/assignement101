import { render } from '@testing-library/react';
import Header from '../header';

describe('Header', () => {
  const renderComponent = (isCollapsed = true) =>
    render(
      <Header onIsCollapsedChange={jest.fn()} isCollapsed={isCollapsed} />
    );

  it('renders Header component', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('renders Header component with left section', () => {
    const { getByText } = renderComponent(true);

    expect(getByText('overview')).toBeInTheDocument();
  });
});
