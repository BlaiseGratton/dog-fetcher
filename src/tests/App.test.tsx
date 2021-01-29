import React from 'react'
import { screen } from '@testing-library/react'
import App from '../components/App'
import render from './utils'

test('renders title bar of app', () => {
  render(<App />);
  const linkElement = screen.getByText(/dog fetcher/i);
  expect(linkElement).toBeInTheDocument();
})
