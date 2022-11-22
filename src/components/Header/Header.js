import React, { useRef, useEffect, useState } from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    }
];
const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") {
            return alert('Please enter search term!');
        }
        dispatch(fetchAsyncMovies(term));
        setTerm("");
    }
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="search-bar">
                    <form onSubmit={submitHandler}>
                        <input type="text" value={term} placeholder="Search for movies" onChange={(e) => setTerm(e.target.value)} />
                        <button type="submit"> <i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Header;
