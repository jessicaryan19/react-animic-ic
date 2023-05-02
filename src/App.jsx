import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Details from './pages/Details';
import { FavoritesProvider } from './lib/context/FavoriteContext';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="app-page">
      <ApolloProvider client={client}>
        <FavoritesProvider>
          <NavBar/>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="/favorites" element={<Favorites/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path=":animeId" element={<Details/>}/>
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
