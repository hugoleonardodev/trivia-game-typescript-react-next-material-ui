import React from 'react';
import { render } from '../testUtils';
import Home from '../../pages/index';

describe('Home page', () => {
  it('should renders a custom text message', () => {
    const { getByText } = render(<Home />, {});
    const text = getByText(
      'yarn create next-app with tests and styled components'
    );
    expect(text).toBeInTheDocument();
  });
});
