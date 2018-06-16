import React ,{ Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,browserHistory } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MovieReview from './movies/MovieReview'

ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
