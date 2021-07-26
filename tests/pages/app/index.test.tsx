import '@testing-library/jest-dom';
import * as Router from 'next/router';
import { useRouter } from 'next/router';
import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import apiResponseOk from '../../mocks/apiResponseOk';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Tests the behavior of the application. General routines and expected values.', () => {
  it('should renders Trivia Game app home (index) page renders on Jest (JSDOM) environment', async () => {
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    expect(screen.getByText('Trivia Game')).toBeInTheDocument();
  });

  it('should be able to type on both input for name and GitHub username', async () => {
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    const inputPlayerName = screen.getByRole('textbox', {
      name: /player name/i,
    });
    expect(inputPlayerName).toBeInTheDocument();
    userEvent.type(inputPlayerName, 'ProfessionalPlayer');
    expect(inputPlayerName).toHaveValue('ProfessionalPlayer');
    const inputGitHubUsername = screen.getByRole('textbox', {
      name: /github user name/i,
    });
    expect(inputGitHubUsername).toBeInTheDocument();
    userEvent.type(inputGitHubUsername, 'hugoleonardodev');
    expect(inputGitHubUsername).toHaveValue('hugoleonardodev');
  });

  it('should be able to click on PLAY button with or without names and options', async () => {
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    const inputPlayerName = screen.getByRole('textbox', {
      name: /player name/i,
    });
    expect(inputPlayerName).toBeInTheDocument();
    userEvent.type(inputPlayerName, 'ProfessionalPlayer');
    expect(inputPlayerName).toHaveValue('ProfessionalPlayer');
    const inputGitHubUsername = screen.getByRole('textbox', {
      name: /github user name/i,
    });
    expect(inputGitHubUsername).toBeInTheDocument();
    userEvent.type(inputGitHubUsername, 'hugoleonardodev');
    expect(inputGitHubUsername).toHaveValue('hugoleonardodev');
    const buttonPlay = screen.getByRole('button', {
      name: /play/i,
    });
    expect(buttonPlay).toBeInTheDocument();
    userEvent.click(buttonPlay);
    const buttonStart = await screen.findByRole('link', {
      name: /start/i,
    });
    expect(buttonStart).toBeInTheDocument();
  });

  it('should be able to click on Start button and start a game', async () => {
    const apiResponseStatusOk = Promise.resolve(apiResponseOk);
    const serviceApiRequest = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => apiResponseStatusOk);
    const mockRouter = jest.spyOn(Router, 'useRouter');
    mockRouter.mockImplementation(() => useRouter());
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    const inputPlayerName = screen.getByRole('textbox', {
      name: /player name/i,
    });
    expect(inputPlayerName).toBeInTheDocument();
    userEvent.type(inputPlayerName, 'ProfessionalPlayer');
    expect(inputPlayerName).toHaveValue('ProfessionalPlayer');
    const inputGitHubUsername = screen.getByRole('textbox', {
      name: /github user name/i,
    });
    expect(inputGitHubUsername).toBeInTheDocument();
    userEvent.type(inputGitHubUsername, 'hugoleonardodev');
    expect(inputGitHubUsername).toHaveValue('hugoleonardodev');
    const buttonPlay = screen.getByRole('button', {
      name: /play/i,
    });
    expect(buttonPlay).toBeInTheDocument();
    userEvent.click(buttonPlay);
    const buttonStart = await screen.findByRole('link', {
      name: /start/i,
    });
    expect(buttonStart).toBeInTheDocument();
    act(() => {
      userEvent.click(buttonStart);
    });
    expect(serviceApiRequest).toHaveBeenCalled();
    expect(serviceApiRequest).toHaveBeenCalledTimes(1);
    expect(serviceApiRequest).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=10',
      { method: 'GET' }
    );
  });

  it('should be able to click on all correct answers in game route', async () => {
    const apiResponseStatusOk = Promise.resolve(apiResponseOk);
    const serviceApiRequest = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => apiResponseStatusOk);
    const mockRouter = jest.spyOn(Router, 'useRouter');
    mockRouter.mockImplementation(() => useRouter());
    const options = { route: '/', useDocument: true };
    const { render } = await getPage(options);
    render();
    const inputPlayerName = screen.getByRole('textbox', {
      name: /player name/i,
    });
    expect(inputPlayerName).toBeInTheDocument();
    userEvent.type(inputPlayerName, 'ProfessionalPlayer');
    expect(inputPlayerName).toHaveValue('ProfessionalPlayer');
    const inputGitHubUsername = screen.getByRole('textbox', {
      name: /github user name/i,
    });
    expect(inputGitHubUsername).toBeInTheDocument();
    userEvent.type(inputGitHubUsername, 'hugoleonardodev');
    expect(inputGitHubUsername).toHaveValue('hugoleonardodev');
    const buttonPlay = screen.getByRole('button', {
      name: /play/i,
    });
    expect(buttonPlay).toBeInTheDocument();
    userEvent.click(buttonPlay);
    const buttonStart = await screen.findByRole('link', {
      name: /start/i,
    });
    expect(buttonStart).toBeInTheDocument();
    act(() => {
      userEvent.click(buttonStart);
    });
    expect(serviceApiRequest).toHaveBeenCalled();
    expect(serviceApiRequest).toHaveBeenCalledTimes(1);
    expect(serviceApiRequest).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=10',
      { method: 'GET' }
    );
    const correctAnswer1 = await screen.findByText('The Artful Dodger');
    const allAnswersButtons = await screen.findAllByRole('button');
    expect(allAnswersButtons.length).toBe(4);
    userEvent.click(correctAnswer1);
    const correctAnswer2 = await screen.findByText('Poseidon');
    userEvent.click(correctAnswer2);
    const correctAnswer3 = await screen.findByText('False');
    userEvent.click(correctAnswer3);
    const correctAnswer4 = await screen.findByText('True');
    userEvent.click(correctAnswer4);
    const correctAnswer5 = await screen.findByText('True');
    userEvent.click(correctAnswer5);
    const correctAnswer6 = await screen.findByText('False');
    userEvent.click(correctAnswer6);
    const correctAnswer7 = await screen.findByText('False');
    userEvent.click(correctAnswer7);
    const correctAnswer8 = await screen.findByText('Thriller');
    userEvent.click(correctAnswer8);
    const correctAnswer9 = await screen.findByText('Ohm');
    userEvent.click(correctAnswer9);
    const correctAnswer10 = await screen.findByText('200');
    userEvent.click(correctAnswer10);
  });

  it('should be able to click on all wrong answers in game route', async () => {
    const apiResponseStatusOk = Promise.resolve(apiResponseOk);

    const serviceApiRequest = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => apiResponseStatusOk);

    const mockRouter = jest.spyOn(Router, 'useRouter');

    mockRouter.mockImplementation(() => useRouter());

    const options = { route: '/', useDocument: true };

    const { render } = await getPage(options);
    render();
    const inputPlayerName = screen.getByRole('textbox', {
      name: /player name/i,
    });
    expect(inputPlayerName).toBeInTheDocument();
    userEvent.type(inputPlayerName, 'ProfessionalPlayer');
    expect(inputPlayerName).toHaveValue('ProfessionalPlayer');
    const inputGitHubUsername = screen.getByRole('textbox', {
      name: /github user name/i,
    });
    expect(inputGitHubUsername).toBeInTheDocument();
    userEvent.type(inputGitHubUsername, 'hugoleonardodev');
    expect(inputGitHubUsername).toHaveValue('hugoleonardodev');
    const buttonPlay = screen.getByRole('button', {
      name: /play/i,
    });
    expect(buttonPlay).toBeInTheDocument();
    userEvent.click(buttonPlay);
    const buttonStart = await screen.findByRole('link', {
      name: /start/i,
    });
    expect(buttonStart).toBeInTheDocument();

    act(() => {
      userEvent.click(buttonStart);
    });

    expect(serviceApiRequest).toHaveBeenCalled();
    expect(serviceApiRequest).toHaveBeenCalledTimes(1);
    expect(serviceApiRequest).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=10',
      { method: 'GET' }
    );

    const wrongAnswer1 = await screen.findByText('Fagin');

    const allAnswersButtons = await screen.findAllByRole('button');

    expect(allAnswersButtons.length).toBe(4);

    userEvent.click(wrongAnswer1);

    const wrongAnswer2 = await screen.findByText('Ares');

    userEvent.click(wrongAnswer2);

    const wrongAnswer3 = await screen.findByText('True');

    userEvent.click(wrongAnswer3);

    const wrongAnswer4 = await screen.findByText('False');

    userEvent.click(wrongAnswer4);

    const wrongAnswer5 = await screen.findByText('False');

    userEvent.click(wrongAnswer5);

    const wrongAnswer6 = await screen.findByText('True');

    userEvent.click(wrongAnswer6);

    const wrongAnswer7 = await screen.findByText('True');

    userEvent.click(wrongAnswer7);

    const wrongAnswer8 = await screen.findByText('Bad');

    userEvent.click(wrongAnswer8);

    const wrongAnswer9 = await screen.findByText('Tesla');

    userEvent.click(wrongAnswer9);

    const wrongAnswer10 = await screen.findByText('100');

    userEvent.click(wrongAnswer10);

    const goToDashBoard = await screen.findAllByText('Go to Dashboard');

    expect(goToDashBoard.length).toBe(2);
  });

  it.only('should be able to click on Go to Dashboard, then Ranking, and then Home buttons', async () => {
    const apiResponseStatusOk = Promise.resolve(apiResponseOk);

    const serviceApiRequest = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => apiResponseStatusOk);

    const mockRouter = jest.spyOn(Router, 'useRouter');

    mockRouter.mockImplementation(() => useRouter());

    const options = { route: '/', useDocument: true };

    const { render } = await getPage(options);
    render();
    const inputPlayerName = screen.getByRole('textbox', {
      name: /player name/i,
    });
    expect(inputPlayerName).toBeInTheDocument();
    userEvent.type(inputPlayerName, 'ProfessionalPlayer');
    expect(inputPlayerName).toHaveValue('ProfessionalPlayer');
    const inputGitHubUsername = screen.getByRole('textbox', {
      name: /github user name/i,
    });
    expect(inputGitHubUsername).toBeInTheDocument();
    userEvent.type(inputGitHubUsername, 'hugoleonardodev');
    expect(inputGitHubUsername).toHaveValue('hugoleonardodev');
    const buttonPlay = screen.getByRole('button', {
      name: /play/i,
    });
    expect(buttonPlay).toBeInTheDocument();
    userEvent.click(buttonPlay);
    const buttonStart = await screen.findByRole('link', {
      name: /start/i,
    });
    expect(buttonStart).toBeInTheDocument();

    act(() => {
      userEvent.click(buttonStart);
    });

    expect(serviceApiRequest).toHaveBeenCalled();
    expect(serviceApiRequest).toHaveBeenCalledTimes(1);
    expect(serviceApiRequest).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=10',
      { method: 'GET' }
    );

    const wrongAnswer1 = await screen.findByText('Fagin');

    const allAnswersButtons = await screen.findAllByRole('button');

    expect(allAnswersButtons.length).toBe(4);

    userEvent.click(wrongAnswer1);

    const wrongAnswer2 = await screen.findByText('Ares');

    userEvent.click(wrongAnswer2);

    const wrongAnswer3 = await screen.findByText('True');

    userEvent.click(wrongAnswer3);

    const wrongAnswer4 = await screen.findByText('False');

    userEvent.click(wrongAnswer4);

    const wrongAnswer5 = await screen.findByText('False');

    userEvent.click(wrongAnswer5);

    const wrongAnswer6 = await screen.findByText('True');

    userEvent.click(wrongAnswer6);

    const wrongAnswer7 = await screen.findByText('True');

    userEvent.click(wrongAnswer7);

    const wrongAnswer8 = await screen.findByText('Bad');

    userEvent.click(wrongAnswer8);

    const wrongAnswer9 = await screen.findByText('Tesla');

    userEvent.click(wrongAnswer9);

    const wrongAnswer10 = await screen.findByText('100');

    userEvent.click(wrongAnswer10);

    const goToDashBoard = await screen.findAllByText('Go to Dashboard');

    expect(goToDashBoard.length).toBe(2);

    userEvent.click(goToDashBoard[1]);

    const goToRankings = await screen.findByRole('link', {
      name: /rankings/i,
    });

    expect(goToRankings).toBeInTheDocument();

    userEvent.click(goToRankings);

    const goToHome = await screen.findByRole('link', {
      name: /home/i,
    });

    expect(goToHome).toBeInTheDocument();

    userEvent.click(goToHome);

    const homePLayButton = await screen.findByRole('textbox', {
      name: /player name/i,
    });

    expect(homePLayButton).toBeInTheDocument();
  });
});
