import { render, screen } from '@testing-library/react';
import App from './App';

function test(rendersLearnReactLink, param2) {
  
}

function expect(linkElement) {
  
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});
