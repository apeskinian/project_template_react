import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import App from './App';

describe('App component', () => {
    it('renders with a H1 element with "BLANK APP"', () => {
        // arrange
        render(<App />);
        // assert
        const h1Element = screen.getByTestId('h1-element');
        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveTextContent('BLANK APP');
    })
})