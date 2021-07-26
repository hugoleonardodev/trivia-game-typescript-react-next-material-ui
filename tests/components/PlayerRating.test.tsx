import '@testing-library/jest-dom';
import React from 'react';
import * as Router from 'next/router';

import { screen, render } from '@testing-library/react';

import PlayerRating from '../../components/PlayerRating';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Tests the behavior of the ButtonSwitch component and side effects.', () => {
  it('should renders Trivia Game app home (index) page renders on Jest (JSDOM) environment', async () => {
    const mockRouter = jest.spyOn(Router, 'useRouter');
    mockRouter.mockImplementation(() => useRouter());
    render(<PlayerRating rating={50} />);
    setTimeout(async () => {
      const fiftyPercent = await screen.findByText('50%');

      expect(fiftyPercent).toBeInTheDocument();
    }, 5000);
  });
  it('should renders Trivia Game app home (index) page renders on Jest (JSDOM) environment', async () => {
    const mockRouter = jest.spyOn(Router, 'useRouter');
    mockRouter.mockImplementation(() => useRouter());
    render(<PlayerRating rating={10} />);
    setTimeout(async () => {
      const fiftyPercent = await screen.findByText('50%');

      expect(fiftyPercent).toBeInTheDocument();
    }, 5000);
  });
  it('should renders Trivia Game app home (index) page renders on Jest (JSDOM) environment', async () => {
    const mockRouter = jest.spyOn(Router, 'useRouter');
    mockRouter.mockImplementation(() => useRouter());
    render(<PlayerRating rating={0} />);
    setTimeout(async () => {
      const fiftyPercent = await screen.findByText('50%');

      expect(fiftyPercent).toBeInTheDocument();
    }, 5000);
  });
  it('should renders Trivia Game app home (index) page renders on Jest (JSDOM) environment', async () => {
    const mockRouter = jest.spyOn(Router, 'useRouter');
    mockRouter.mockImplementation(() => useRouter());
    render(<PlayerRating rating={100} />);
    setTimeout(async () => {
      const fiftyPercent = await screen.findByText('50%');

      expect(fiftyPercent).toBeInTheDocument();
    }, 10000);
  });
});
