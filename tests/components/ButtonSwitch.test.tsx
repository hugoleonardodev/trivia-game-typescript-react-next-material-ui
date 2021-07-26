import '@testing-library/jest-dom';
import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tests the behavior of the ButtonSwitch component and side effects.', () => {
  it('should renders Trivia Game app home (index) page renders on Jest (JSDOM) environment', async () => {
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    expect(screen.getByText('Trivia Game')).toBeInTheDocument();
    // const triviaGameBlack = await screen.findByRole('heading', {
    //   name: /trivia game/i,
    // });
    // expect(triviaGameBlack).toBeInTheDocument();
    // expect(triviaGameBlack).toHaveStyle({
    //   color: 'inherit',
    // });
    const switchThemeColor = screen.getByRole('checkbox', {
      name: /primary checkbox/i,
    });
    expect(switchThemeColor).toBeInTheDocument();
    expect(switchThemeColor).toHaveStyle('background-color: white');
    userEvent.click(switchThemeColor);
    const triviaGameWhite = await screen.findByRole('heading', {
      name: /trivia game/i,
    });
    expect(triviaGameWhite).toBeInTheDocument();
    // expect(triviaGameWhite).toHaveStyle({
    //   display: 'block',
    //   alignItems: 'center',
    //   justifyContent: 'space-around',
    //   color: 'white',
    // });
    expect(switchThemeColor.parentElement).toHaveStyle(
      'justify-content: inherit;'
    );
  });

  test.todo('Switch Colo Theme');
});
