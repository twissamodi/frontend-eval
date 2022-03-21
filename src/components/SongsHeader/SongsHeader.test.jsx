import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SongsHeader from './SongsHeader';
import 'react-router-dom';
import { songsBasedOnGenre } from '../../constants/routes';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));
describe('test song header component', () => {
  it('should navigate to desired path when button-image is clicked', () => {
    render(<SongsHeader action="all songs" />);
    fireEvent.click(screen.getByTestId('toggle-button'));
    expect(mockNavigate).toHaveBeenCalledWith(songsBasedOnGenre);
  });
  it('should display correct header title', () => {
    render(<SongsHeader action="all songs" />);
    expect(screen.getByText('all songs')).toBeInTheDocument();
  });
});
