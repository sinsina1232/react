import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) =>({
  type: 'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMPVE_EXPENSE
const removeExpense = ({id} = {}) =>({
  type: 'REMOVE_EXPENSE',
  id
})
//EDITE_EXPENSE
const editExpense = ((id,updates)=>({
  type: 'EDITE_EXPENSE',
    id,
    updates
  }
));
//SET_TEXT_FILTER
const setTextFilter =((text='')=>({
  type: 'SET_TEXT_FILTER',
  text
}));
//SORT_BY_DATE
const sortByDate = (() =>({
  type:'SORT_BY_DATE'
}));
//SORT_BY_AMOUNT
const sortByAmount = (() =>({
  type:'SORT_BY_AMOUNT'
}));
//SET_START_DATE
const setStartDate = (startDate = undefined)=> ({
  type: 'SET_START_DATE',
  startDate
});
//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});
//EXPENSES_REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDITE_EXPENSE':
    return state.map((expense)=>{
      if(expense.id === action.id){
              return {...expense,
              ...action.updates
      }
    }else{
      return expense;
    }
});
default:
return state
  }
};


const filtersReducerDefaultStatus ={
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultStatus, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
          text: action.text
        };
        case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
        case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        };
        case 'SET_START_DATE':
        return{
          ...state,
          startDate: action.startDate
        };
        case 'SET_END_DATE':
        return{
          ...state,
          endDate: action.endDate
        };
    default:
    return state;
  }
};
  const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense)=>{
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDatematch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDatematch && textMatch;
    }).sort((a, b)=>{
      if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1: -1;
      }else if(sortBy ==='amount'){
        return a.amount < b.amount ? 1: -1;
      }
    });
  }
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
  });
    const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt: 21000}));
    const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:250, createdAt: 1000}));
    const expenseThree = store.dispatch(addExpense({description:'Tiramisu', amount:650, createdAt: -1000}));
    const expenseFour = store.dispatch(addExpense({description:'Water', amount:50, createdAt: 500}));
                                        //
                                        // store.dispatch(editExpense(expenseTwo.expense.id,{ amount:500 }));
                                        // store.dispatch(removeExpense({id: expenseOne.expense.id}));
                                        //
                                        // store.dispatch(setTextFilter('ali'));
                                        // store.dispatch(setTextFilter('ali'));
                                        //
                                        store.dispatch(sortByAmount());//amount
                                        // store.dispatch(sortByDate());//date
// store.dispatch(setStartDate(-2000));
// store.dispatch(setEndDate(999));
//
// store.dispatch(setEndDate(512));

const demoState = {
  expenses:[{
    id: 'kjhfgkjfh',
    description: 'January rent',
    note: 'this was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters:{
    text:'rent',
    sortBy:'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
