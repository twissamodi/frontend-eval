import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';
import 'react-router-dom';
import { allSongs } from '../../constants/routes';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));
describe('test button component', () => {
  it('should navigate to desired path when clicked', () => {
    render(<Button />);
    expect(screen.getByText('sync')).toBeInTheDocument();
    fireEvent.click(screen.getByText('sync'));
    expect(mockNavigate).toHaveBeenCalledWith(allSongs);
  });
});
