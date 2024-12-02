import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormattedDate from './FormattedDate';

describe('FormattedDate component', () => {
    test('renders without crashing', () => {
        render(<FormattedDate date="2023-10-10" />);
    });

    test('displays "Date non disponible" when no date is provided', () => {
        render(<FormattedDate date={null} />);
        expect(screen.getByText('Date non disponible')).toBeInTheDocument();
    });
});

