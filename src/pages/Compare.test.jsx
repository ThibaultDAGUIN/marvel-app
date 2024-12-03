import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './Compare';
import { useLoaderData } from 'react-router';

jest.mock('react-router', () => ({
    useLoaderData: jest.fn(),
}));

const mockCharacters = [
    {
        id: '1',
        name: 'Beast',
        capacities: {
            "force": 5,
            "intelligence": 8,
            "durability": 6,
            "energy": 6,
            "speed": 1,
            "fighting": 3
        },
        modified: '2023-01-01'
    },
    {
        id: '2',
        name: 'Captain America',
        capacities: {
            "force": 4,
            "intelligence": 3,
            "durability": 3,
            "energy": 1,
            "speed": 2,
            "fighting": 0
        },
        modified: '2023-02-01'
    },
];

useLoaderData.mockReturnValue(mockCharacters);

describe('CompareCharactersPage component', () => {
    test('renders without crashing', () => {
        render(<CompareCharactersPage />);
    });

    test('renders the correct number of characters in the dropdowns', () => {
        render(<CompareCharactersPage />);
        const select1 = screen.getByTestId('select-character-1');
        const select2 = screen.getByTestId('select-character-2');
        expect(select1.children).toHaveLength(mockCharacters.length);
        expect(select2.children).toHaveLength(mockCharacters.length);
    });

    test('changes selected character in first select', () => {
        render(<CompareCharactersPage />);
        const select1 = screen.getByTestId('select-character-1');
        fireEvent.change(select1, { target: { value: '1' } });
        expect(select1.value).toBe('1');
    });
});

