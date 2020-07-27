import React, { useState } from 'react';

import { SearchIcon } from '../Icons/Icons';
import { SortButton } from '../Buttons/Buttons';

const Search = () => {

    const [ search, setSearch ] = useState('');

    return (
        <form className="search" onSubmit={e => e.preventDefault()}>
            <div className="input-group">
                <SearchIcon />
                <input type="text" name="search" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <SortButton />
        </form>
    )
}

export default Search;