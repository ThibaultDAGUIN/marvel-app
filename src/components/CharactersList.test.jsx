// FILEPATH: /c:/Users/tdaguin/marvel-app/src/components/CharactersList.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom';
import { format } from 'date-fns';

const characters = [
    {
        id: "1",
        name: "Thor",
        modified: "2023-01-01"

    },
    {
        id: "2",
        name: "Captain America",
        modified: "2023-02-01"
    }
];

describe('CharactersList component', () => {
    test('renders without crashing', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
    });

    test('renders the correct number of characters', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);
    });

    test('renders the correct formatted dates for each character', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
        const formattedDate1 = format(new Date(characters[0].modified), 'MMM dd, yyyy');
        const formattedDate2 = format(new Date(characters[1].modified), 'MMM dd, yyyy');
        expect(screen.getByText(formattedDate1)).toBeInTheDocument();
        expect(screen.getByText(formattedDate2)).toBeInTheDocument();
    });
});
