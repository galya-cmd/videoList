import React from 'react';
import './App.css';
import ROUTES from '../../routes/routes';
import { PageWrapper } from './layout/page-wrapper';
import { ActorsPage } from './pages/actors-page';
import { HomePage } from '../pages/home-page';
import { SearchPage } from '../pages/keyword-search-page';
import { MoviePage } from '../pages/movie-page';
import { PersonalityPage } from '../pages/personality-page';
import { PopularPage } from '../pages/popular-page';
import { Top250Page } from '../pages/top250-page';

function App() {
  return (
    <div className="App">
      <PageWrapper />
      <ActorsPage/>

    </div>
  );
}

export default App;
