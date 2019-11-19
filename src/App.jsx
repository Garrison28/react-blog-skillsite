import React from 'react';
import './App.css';
import Home from './Home'
import BlogPosts from './BlogPosts'
import Contact from './Contact'
import FavoriteMovie from './FavoriteMovie'
import FavoriteFood from './FavoriteFood'
// import TMDB from './TMDB';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  var blogPosts = ['Javascript', 'React', 'What the fuck is THIS']
  var favoriteMovies = ['Skyfall', 'Hector and the Search for Happiness']
  var favoriteFoods = ['Pizza', 'Sushi', 'Tacos', 'Ice-cream']
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="nav-bar" to="/">Home</Link>{' | '}
          <Link className="nav-bar" to="/blogposts">Blog</Link>{' | '}
          <Link className="nav-bar" to="/favoritemovies">Favorite Movies</Link>{' | '}
          <Link className="nav-bar" to="/favoritefoods">Favorite Foods</Link>{' | '}
          <Link className="nav-bar" to="/contact">Contact</Link>{' | '}
        </nav>
        < Route exact path="/" component={Home} />
        < Route exact path="/blogposts" render={ () => <BlogPosts blogPosts={blogPosts} /> } />
        < Route path="/favoritemovies" render={ () => <FavoriteMovie favoriteMovies={favoriteMovies} />} />
        < Route path="/favoritefoods" render={ () => <FavoriteFood favoriteFoods={favoriteFoods} />} />
        < Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default App;
