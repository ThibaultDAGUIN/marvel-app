// FILEPATH: /c:/Users/tdaguin/marvel-app/src/pages/Contact.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact component', () => {
    test('renders without crashing', () => {
        render(<Contact />);
    });

    test('sets the document title correctly', () => {
        render(<Contact />);
        expect(document.title).toBe("About Us | Marvel's Characters");
    });

    test('renders the "Contact Us" heading', () => {
        render(<Contact />);
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('renders the contact email link with correct href', () => {
        render(<Contact />);
        const emailLink = screen.getByText('daguint@gmail.com').closest('a');
        expect(emailLink).toHaveAttribute('href', 'mailto:daguint@gmail.com');
    });
});