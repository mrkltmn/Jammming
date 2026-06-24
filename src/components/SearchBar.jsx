import React from 'react';

function SearchBar({ search, setSearch, onSearch }) {

    return (
        <form onSubmit={onSearch}>
            <label> Search:
                <input id='searchBar' type='text' value={search} onChange={e => setSearch(e.target.value)} />
            </label>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar