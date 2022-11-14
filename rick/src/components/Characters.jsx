import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((resp) => {
                setCharacters(resp.data.results);
            });
    }, []);

    return (
        <div className='row'>
            {characters.map((character, index) => {
                return (
                    <Card key={index} character={character} />
                )
            })}

        </div>
    );
}

export default Characters;