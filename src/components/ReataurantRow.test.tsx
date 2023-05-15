import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import ReataurantRow from './ReataurantRow';

describe('ReataurantRow', () => {
  const restaurant = (fixtures.restaurants)[0];

  it('render restaurant information', () => {
    render(
      <table>
        <tbody>
          <ReataurantRow restaurant={restaurant} />
        </tbody>
      </table>,
    );

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
    screen.getByText(/짜장면/);
  });
});
