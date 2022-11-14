import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

import Pagination from './Pagination';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const [page, changePage] = useState(1);

    const url = "https://rickandmortyapi.com/api/character/?page="

    useEffect(() => {
        axios
            .get(url + page)
            .then((resp) => {
                setCharacters(resp.data.results);
            });
    }, [page]);

    return (
        <>
            <div className='row'>
                {characters.map((character, index) => {
                    return (
                        <Card key={index} character={character} />
                    )
                })}

            </div>
            <Pagination page={page} changePage={changePage} />
        </>
    );
}

export default Characters;