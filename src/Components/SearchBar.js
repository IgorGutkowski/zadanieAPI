import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(term, filter);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">Wszystkie</option>
                <option value="Italian">Włoska</option>
                <option value="American">Amerykańska</option>
                <option value="Thai">Tajska</option>
                <option value="Indian">Indyjska</option>
                <option value="Chinese">Chińska</option>
                <option value="Japanese">Japońska</option>
                <option value="Mexican">Meksykańska</option>
            </select>
            <button type="submit">
                Szukaj
            </button>
        </form>
    );
};

export default SearchBar;
