import React from 'react'

const Search = () => {
    return (
        <div className="position-relative me-5">
            <div className="position-absolute top-0 end-0">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Buscar"></input>
                    <button className="btn btn-secondary" type="button" id="button-addon2">Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default Search;