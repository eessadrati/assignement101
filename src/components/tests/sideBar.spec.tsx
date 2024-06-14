import { render } from '@testing-library/react';
import SideBar from '../sideBar';
import { MemoryRouter } from 'react-router-dom';
import { TooltipProvider } from '../ui/tooltip';
import userEvent from '@testing-library/user-event';
import MainLayout from '../MainLayout';

describe('sideBar', () => {
  const renderComponent = (isCollapsed = true) =>
    render(
      <MemoryRouter>
        <TooltipProvider>
          <SideBar onIsCollapsedChange={jest.fn()} isCollapsed={isCollapsed} />
        </TooltipProvider>
      </MemoryRouter>
    );

  it('renders side bar component', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });

  it('renders side bar expended', () => {
    const { getByText } = renderComponent(false);

    expect(getByText('@ App name 2021')).toBeInTheDocument();
  });

  it('renders SideBar correctly when collapsed', () => {
    const { queryByText } = renderComponent(true);
    expect(queryByText('@ App name 2021')).toBeNull();
  });

  it('collapses SideBar when collapse button click', async () => {
    const { findByTestId, queryByText } = render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    expect(queryByText('@ App name 2021')).toBeInTheDocument();
    const btn = await findByTestId('collapse-btn');

    const user = userEvent.setup();
    await user.click(btn);
    expect(queryByText('@ App name 2021')).toBeNull();
  });
});
