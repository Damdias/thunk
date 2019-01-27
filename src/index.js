import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers,applyMiddleware } from "redux";
import Counter from "./Counter";
import { selectSubreddit, fetchPosts,fetchPostsIfNeeded } from './action'
//import ToDo from "./TodoReducer";
import ToDo from "./reducers";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp"
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";

let loggerMiddleware = createLogger();
let reducer = combineReducers({ counter: Counter, todos: ToDo });
let store = createStore(reducer,applyMiddleware(thunkMiddleware,loggerMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(selectSubreddit("reactjs"));
store.dispatch(fetchPosts('reactjs')).then(()=>console.log(store.getState()));
store.dispatch(fetchPostsIfNeeded('reactjs')).then(()=>console.log(store.getState()));
console.log(store.getState());
ReactDOM.render(
    <Provider store={store} >
       <TodoApp/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
