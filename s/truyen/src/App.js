import React from 'react';
import './App.css';
import HomeScreen from './mainScreen/HomeScreen'
import FormPostTruyen from './component/FormPostTruyen';
import FormPostChapter from './component/FormPostChapter';
import DetailComic from './mainScreen/DetailComic';
import Read from './mainScreen/Read';
import SearchByCategory from './mainScreen/SearchByCategory';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact path='/'
            render={(props) =>{
              return <HomeScreen {...props}/>}
            } 
        />

        <Route
          exact path='/:comicId'
            render={(props) =>{
              return <DetailComic {...props} />}
            } 
        />

        <Route
          exact path='/read/:chapterId'
            render={(props) =>{
              return <Read {...props}/>}
            } 
        />

        <Route
          exact path='/category/:cate'
            render={(props) =>{
              return <SearchByCategory {...props}/>}
            } 
        />  
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
