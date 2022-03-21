import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupByGenre from './GroupByGenre';
import MOCK_DATA from '../../constants/mockData';
import 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));
describe('test header component', () => {
  it('should display the correct title name', async () => {
    render(<GroupByGenre allSongsData={MOCK_DATA} distinctGenres={['Pop', 'Country']} />);
    expect(await screen.findByText('pop')).toBeInTheDocument();
  });
});
