import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import setTextFiler from './actions/filters';


const store = configureStore();
store.dispatch(addExpense({description: 'gas bill'}));
store.dispatch(addExpense({description: 'water bill', amount:4500}));

store.dispatch(setTextFilter('water'));

setTimeout(() =>{
  store.dispatch(setTextFilter('bill'));
},3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// add expense ->water bill
//add expense -> gas bill
//setTextfilet -> bill
//getviibleExpenses print visible ones to screen/
//
// console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
