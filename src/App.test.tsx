import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurants', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
      screen.getByText(/혹등고래카레 일식/);
    });
  });
});
