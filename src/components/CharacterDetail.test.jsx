// FILEPATH: /c:/Users/tdaguin/marvel-app/src/components/CharacterDetail.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { format } from 'date-fns';

const character = {
    name: "Thor",
    thumbnail: {
        path: "http://example.com/image",
        extension: "jpg"
    },
    description: "God of Thunder",
    modified: "2023-01-01"
};

describe('CharacterDetail component', () => {
    test('renders character name', () => {
        render(<CharacterDetail character={character} />);
        expect(screen.getByText(character.name)).toBeInTheDocument();
    });

    test('renders character thumbnail', () => {
        render(<CharacterDetail character={character} />);
        const imgElement = screen.getByAltText(character.name);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`);
    });

    test('renders character description', () => {
        render(<CharacterDetail character={character} />);
        expect(screen.getByText(character.description)).toBeInTheDocument();
    });

    test('renders character modified date', () => {
        render(<CharacterDetail character={character} />);
        const formattedDate = format(new Date(character.modified), 'MMM dd, yyyy');
        expect(screen.getByText(`${formattedDate}`)).toBeInTheDocument();
    });

    test('renders correctly with empty character object', () => {
        render(<CharacterDetail character={{}} />);
        expect(screen.queryByText(character.name)).not.toBeInTheDocument();
        expect(screen.queryByAltText(character.name)).not.toBeInTheDocument();
        expect(screen.queryByText(character.description)).not.toBeInTheDocument();
        expect(screen.queryByText(`Date de modification : ${character.modified}`)).not.toBeInTheDocument();
    });

    test('renders correctly with missing name', () => {
        const characterWithoutName = { ...character, name: null };
        render(<CharacterDetail character={characterWithoutName} />);
        expect(screen.queryByText(character.name)).not.toBeInTheDocument();
    });

    test('renders correctly with missing thumbnail', () => {
        const characterWithoutThumbnail = { ...character, thumbnail: null };
        render(<CharacterDetail character={characterWithoutThumbnail} />);
        expect(screen.queryByAltText(character.name)).not.toBeInTheDocument();
    });

    test('renders correctly with missing description', () => {
        const characterWithoutDescription = { ...character, description: null };
        render(<CharacterDetail character={characterWithoutDescription} />);
        expect(screen.queryByText(character.description)).not.toBeInTheDocument();
    });

    test('renders correctly with missing modified date', () => {
        const characterWithoutModified = { ...character, modified: null };
        render(<CharacterDetail character={characterWithoutModified} />);
        expect(screen.queryByText(`Date de modification : ${character.modified}`)).not.toBeInTheDocument();
    });
});