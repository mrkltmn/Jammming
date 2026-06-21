import React from 'react';
import SearchButton from './SearchButton';

function SearchBar() {
    return (
        <form>
            <label> Search:
                <input id='searchBar' type='text' />
            </label>
            <SearchButton />
        </form>
    )
}

export default SearchBar