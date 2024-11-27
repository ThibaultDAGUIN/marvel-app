import '@testing-library/jest-dom';

import Characters from './Characters';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

// mock the useLoaderData hook, so that we can test the Characters component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return characters;
    },
}));

describe('Characters Component', () => {

    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );
        expect(screen.getByText('Marvel Characters')).toBeInTheDocument();
    });

    test('renders sort and order dropdowns', () => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );
        
        const sortDropdown = screen.getByLabelText(/Tri:/i);
        expect(sortDropdown).toBeInTheDocument();
        expect(sortDropdown.value).toBe('name');
        
        const orderDropdown = screen.getByLabelText(/Ordre:/i);
        expect(orderDropdown).toBeInTheDocument();
        expect(orderDropdown.value).toBe('asc');
    });

    test('renders sort and order dropdowns with initial values', () => {
        const sort ='modified';
        const order ='desc';

        render(
            <MemoryRouter initialEntries={[`/?sort=modified&order=desc`]}>
                <Characters />
            </MemoryRouter>
        );

        const sortDropdown = screen.getByTestId('sort');
        expect(sortDropdown).toHaveValue(sort);

        const orderDropdown = screen.getByTestId('order');
        expect(orderDropdown).toHaveValue(order);
    });

    test('renders character names', () => {
        render(<Characters />, { wrapper: BrowserRouter });
        
        characters.forEach(character => {
            const characterElement = screen.getByText(character.name);
            expect(characterElement).toBeInTheDocument();
        });
    });

    test('renders characters list', () => {
        render(<Characters />, { wrapper: BrowserRouter });
        
        const charactersList = screen.getByRole('list');
        expect(charactersList).toBeInTheDocument();
    });

    test('renders number of characters', () => {
        render(<Characters />, { wrapper: BrowserRouter });
        
        const numberOfCharacters = screen.getByText(/There are \d+ characters/i);
        expect(numberOfCharacters).toBeInTheDocument();
        // TODO fix
        //expect(numberOfCharacters).toHaveTextContent(`There are ${characters.length} characters`);
    });

    test('changes sort and order', () => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );

        const sortDropdown = screen.getByTestId('sort');
        const orderDropdown = screen.getByTestId('order');

        fireEvent.change(sortDropdown, { target: { value: 'modified' } });
        expect(sortDropdown).toHaveValue('modified');

        fireEvent.change(orderDropdown, { target: { value: 'desc' } });
        expect(orderDropdown).toHaveValue('desc');
    });

    test('sets document title', () => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );

        expect(document.title).toBe('Marvel App');
    });

});