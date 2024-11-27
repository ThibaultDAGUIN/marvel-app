
import React, { useState, useEffect } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { useLoaderData, useNavigate } from 'react-router';
import { getCharacters } from '../api/characters-api';
import { useSearchParams } from 'react-router-dom';

const Characters = () => {
    document.title = "Marvel App";

    const initialCharacters = useLoaderData();


    let [searchparams, setSearchparams] = useSearchParams();

    const [characters, setCharacters] = useState(initialCharacters);
    const [sort, setSort] = useState(searchparams.get('sort') || 'name');
    const [order, setOrder] = useState(searchparams.get('order') || 'asc');
    // const navigate = useNavigate();


    useEffect(() => {
        const sortedCharacters = getCharacters({ sort, order });
        setCharacters(sortedCharacters);
        //navigate(`./?sort=${sort}&order=${order}`);
    }, [sort, order]);

    return (
        <>
            <h2>Marvel Characters</h2>
            <div>
                <label>
                    Tri:
                    <select value={sort} data-testid='sort' onChange={(e) => setSort(e.target.value)}>
                        <option value="name">Nom du heros</option>
                        <option value="modified">Date de modification</option>
                    </select>
                </label>
                <label>
                    Ordre:
                    <select value={order} data-testid='order'onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">Croissant</option>
                        <option value="desc">Décroissant</option>
                    </select>
                </label>
            </div>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default Characters;