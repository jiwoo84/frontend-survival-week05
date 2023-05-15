import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import RestaurantsTable from './RestaurantsTable';

describe('RestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders table header', () => {
    render(<RestaurantsTable restaurants={restaurants} />);

    screen.getByText(/식당 이름/);
    screen.getByText(/종류/);
    screen.getByText(/메뉴/);
  });
});
