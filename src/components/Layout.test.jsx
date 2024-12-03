// FILEPATH: /c:/Users/tdaguin/marvel-app/src/pages/Layout.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

test('renders Layout component correctly', () => {
    render(
        <MemoryRouter>
            <Layout />
        </MemoryRouter>
    );

    // Check for header
    expect(screen.getByText('Marvel App')).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Compare')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check for footer
    expect(screen.getByText(/Marvel App - 2023 - Version:/)).toBeInTheDocument();

    // Check for Outlet component
    expect(screen.getByRole('main')).toBeInTheDocument();
});