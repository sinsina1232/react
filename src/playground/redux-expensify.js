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
    default:
    return state;
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
  }
};

const setTextFilter =((text='')=>({
  type: 'SET_TEXT_FILTER',
  text
}));
const filtersReducerDefaultStatus ={text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
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

  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  store.subscribe(()=>{
    console.log(store.getState())
  });
                                        // const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100}));
                                        // const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:250}));
                                        //
                                        // store.dispatch(editExpense(expenseTwo.expense.id,{ amount:500 }));
                                        // store.dispatch(removeExpense({id: expenseOne.expense.id}));
                                        //
                                        // store.dispatch(setTextFilter('rent'));
                                        // store.dispatch(setTextFilter('ali'));
                                        //
                                        // store.dispatch(sortByAmount());//amount
                                        // store.dispatch(sortByDate());//date
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(512));

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
