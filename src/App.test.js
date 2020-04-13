import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders form estimation text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Form Estimation/i);
  expect(textElement).toBeInTheDocument();
});
