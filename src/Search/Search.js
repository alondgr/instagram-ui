import React, { useState, useEffect, useCallback } from 'react';
import { search } from '../services/user.service';
import SearchResult from './SearchResult/SearchResult';
import './Search.scss';
import { debounce } from 'lodash';

export default function Search() {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    useEffect(() => {
        if (!query.trim().length) {
            setResults([]);
            return;
        }
        search(query)
            .then(usersFound => setResults(usersFound))
            .catch(e => console.log(e));
    }, [query]);

    const querySearch = debounce(() => {
        search(query)
            .then(usersFound => setResults(usersFound))
            .catch(e => console.log(e));
    }, 600);

    const setQuery2 = (text) => {
        setQuery(text);
        querySearch();
    };

    return (
        <div>
            <form>
                <input className="search-input" value={query} onChange={e => setQuery2(e.target.value)} placeholder="Looking for someone?" />
            </form>
            <hr />
            <div>
                {results.map(result => <SearchResult user={result} key={result._id} />)}
            </div>
        </div>
    )
}
