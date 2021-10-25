import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'normalize.css/normalize.css'
import './styles/styles.scss';
const ExpenseDashboardPage = () =>(
  <div>
    This is from my dashboard component.
  </div>
);

const AddExpensePage = () =>(
  <div>
    This is from my Expense component.
  </div>
);


const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
    </div>

  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))