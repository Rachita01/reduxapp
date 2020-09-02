import store from './store';
import {bugAdded,bugResolved} from './actions';
import {bugRemoved} from './actions';
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed",store.getState());
})
store.dispatch(bugAdded("Bug 1"));


store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
unsubscribe();
console.log(store.getState());

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//Compose and Pipe for calling many functions
// import {compose,pipe} from "lodash/fp";
// let input = "     Javascript       ";

// const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;
// const toLowerCase = str => str.toLowerCase();
// const toUpperCase = str => str.toUpperCase();

// let result = compose(wrapInDiv,toLowerCase,trim);
// let result1 = pipe(trim,toUpperCase,wrapInDiv);
// let transform = result(input);
// let transform1 = result1(input);

// alert(transform);
// alert(transform1);

// const person = {name:"John",
// address:{
//   country:"USA",
//   city:"San Francisco"
// }
// };
//We can either use assign operator to copy object or spread operator
//const updated = Object.assign({},person,{name:"Bob",age:"21"});
// const updated={...person,name:"Bob"};
// updated.address.city="New York"; //This showed that if we do not deep copy the object then the changes in copied one can change the original one
// console.log(person);

// const updated={...person,
//   address:{
//     ...person.address,
//     city:"New York"},
//     name:"Bob"};
// console.log(person);
// console.log(updated);

//Use of immutable.js to enforce immutability using Map
// import {Map} from 'immutable';

// let book = Map({title:"Harry Porter"});
//  function publish (book)
//  {
//    return book.set("isPublished",true);
//  }
//  book = publish(book);
// console.log(book.get("title"));
// console.log(book.toJS());

//To get rid of ge and set of immutable.js we can use immer instead. Also deep copy is easy when using immer

// import {produce} from 'immer';
 
// let book = {title:"Harry Porter"};

// function publish(book){
//   return produce (book,DraftBook=> {
//     DraftBook.isPublished = true;
//   });
// }

// let updated = publish(book);

// console.log(book);
// console.log(updated);

