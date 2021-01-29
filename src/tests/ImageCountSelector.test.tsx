import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import ImageCountSelector from '../components/App';
import render from './utils'

test('cannot set store value over 50', () => {
  render(<ImageCountSelector />);
  const numberInput = screen.getByTestId('image-count-input')
  expect(numberInput).toBeInTheDocument()

  fireEvent.change(numberInput, { target: { value: 10 } })
  expect(Number(numberInput.value)).toEqual(10)

  fireEvent.change(numberInput, { target: { value: 50 } })
  expect(Number(numberInput.value)).toEqual(50)

  fireEvent.change(numberInput, { target: { value: 50000 } })
  expect(Number(numberInput.value)).toEqual(50)
})


test('cannot set store value below 1', () => {
  render(<ImageCountSelector />);
  const numberInput = screen.getByTestId('image-count-input')
  expect(numberInput).toBeInTheDocument()

  expect(Number(numberInput.value)).toEqual(1)

  fireEvent.change(numberInput, { target: { value: 0 } })
  expect(Number(numberInput.value)).toEqual(1)

  fireEvent.change(numberInput, { target: { value: -100 } })
  expect(Number(numberInput.value)).toEqual(1)
})
