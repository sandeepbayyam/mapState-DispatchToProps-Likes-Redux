import React from "react";
import "./style.css";
import Likes from './Likes.js'
import {Provider} from 'react-redux';
import store from './store/store';
export default function App() {
  return (
    <Provider store={store}>
    <div className='betterview'>
     <h3>Likes & Dislikes using Redux</h3>
     <Likes></Likes>
    </div>
    </Provider>
  );
}
