import React, { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './Posts.css';
//import LanguageContext from '../../contexts/LanguageContext';
import useGETapi from '../../hooks/useGETapi';
import Detail from './Datail';
import ReactDeleteRow from 'react-delete-row';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
const SORT_OPTIONS = {
  ASC: 'ASC',
  DES: 'DES'
}

// const TEXTS = {
//   "SEARCH": {
//     en: "Search for posts",
//     vi: "Tìm kiếm theo pokemons name"
//   },
//   "SORT": {
//     en: "sort",
//     vi: "Sắp xếp"
//   }
// }

//const getText = (textNode, language) => textNode[language];

const mapResponseToData = response => response.data;
const PostsPage = () => {
  //const language = useContext(LanguageContext);
  const {
    data,
    isLoading,
    error
  } = useGETapi([], 'https://jsonplaceholder.typicode.com/posts', mapResponseToData )
  
  const [sortByName, setSortByName] = useState(SORT_OPTIONS.ASC);
  const [searchText, setSearchText] = useState('');
  
  const posts = data;
  
  const postsFiltered = posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));

  const postsSorted = useMemo(()=> {
    const getPostsSorted = () => {
      const mul = sortByName === SORT_OPTIONS.ASC ? 1 : -1;
      return postsFiltered.sort((post1, post2) => {
        if(post1.title.toLowerCase() < post2.title.toLowerCase()) return -1 * mul;
        if(post1.title.toLowerCase() > post2.title.toLowerCase()) return 1 * mul;
        return 0;
      })
    }
    return getPostsSorted()
  }, [postsFiltered, sortByName]);

  if(isLoading) return <h1>Loading</h1>;
  if(error) return <p style={{color: 'red'}}>Error: { error }</p>
  const url = "https://react-training-react.web.app/posts/"
  return (
      
    <div>
      <div className="search-post">
        <input value={ searchText } onChange = { evt => setSearchText(evt.target.value) } type="text" placeholder="Search by Title"/>
      </div>
      <table> 
        <thead>
          <tr>
            <th>ID</th>
            <th>
            Sort by
              <select value = { sortByName } onChange={ evt => setSortByName(evt.target.value)}>
              <option value={ SORT_OPTIONS.ASC}>ASC</option>
              <option value={ SORT_OPTIONS.DES }>DES</option>
              </select> 
          </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         { postsSorted.map((post, i) => { return (
            <ReactDeleteRow deleteElement={"Remove"}
                            key={post.title} data={post} onDelete={ post => { return window.confirm(`Are you sure?`) }}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td> 
                <a style = {{textDecoration: 'none'}} href= {`https://react-training-react.web.app/posts/${post.id}`}>View detail </a>
                </td>
            </ReactDeleteRow>
            )}) }
        </tbody>
      </table>
      
    </div>
  );
};

export default PostsPage;
