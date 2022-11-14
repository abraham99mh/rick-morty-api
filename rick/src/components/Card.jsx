import React, { useEffect, useState } from 'react';

const Card = ({ character }) => {

    const [colorStatus, setColorStatus] = useState();

    useEffect(() => {
        if (character.status === "Alive") {
            setColorStatus("bg-success");
        } else if (character.status === "unknown") {
            setColorStatus("bg-warning");
        } else {
            setColorStatus("bg-danger");
        }
    }, [character.status]);

    return (
        <div className='col-12 col-lg-6'>
            <div className='card text-bg-secondary mb-4'>
                <div className='row'>
                    <div className='col-5'>
                        <img
                            src={character.image}
                            className="img-fluid rounded-start"
                            style={{ maxWidth: "35vh" }}
                            alt={character.name}>
                        </img>
                    </div>
                    <div className='col-7'>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className={colorStatus}>{character.status} - {character.species}</p>
                            <span className="card-text">Última ubicación conocida:</span>
                            <p className="card-text">{character.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;