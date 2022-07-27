import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React + Flask Tutorial link', () => {
  render(<App />);
  const linkElement = screen.getByText("React + Flask Tutorial");
  expect(linkElement).toBeInTheDocument();
});
