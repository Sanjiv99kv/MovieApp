import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/Store.jsx';
import axios from 'axios';

const REACT_APP_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGRiNGY0ZGRlNTFhMWZlNjY4MjZiNzBjN2NjMmRhOSIsIm5iZiI6MTcyNjY3MDI4Ni45OTI5MDEsInN1YiI6IjY2ZTk0YjI0ODJmZjg3M2Y3ZDFlYTI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCnqeypRd-tXSa6QodOK4A9fqzkj7C0EmJmgFrZg2M8";


axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common['Authorization'] = `Bearer ${REACT_APP_TOKEN}`;

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
);