import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
test('should set default state',()=>{
  const state = expensesReducer(undefined, { type:'@@INIT' });
  expect(state).toEqual([]);
});
test('should add expense by id',()=>{
  const state = expensesReducer([expenses[1]], { expense: expenses[0], type:'ADD_EXPENSE'});
  expect(state).toEqual([ expenses[1], expenses[0] ]);
});
test('should remove an existing expense id',()=>{
  const state = expensesReducer(expenses, { id: expenses[0].id, type: 'REMOVE_EXPENSE' });
  expect(state).toEqual([expenses[1], expenses[2]]);
});
test('should not remove an non-existing expense id',()=>{

  const state = expensesReducer(expenses, { id: -1, type: 'REMOVE_EXPENSE' });
  expect(state).toEqual(expenses);
});
test('should add an expense',()=>{
  const new_expense = {id: 3,
    description:'Pay for Pussy',
    note: 'Didnt worth it',
    amount: 200,
    createdAt: moment(0).subtract(7, 'days').valueOf()
  };
  const state = expensesReducer(expenses, { expense: new_expense, type: 'ADD_EXPENSE' });
  expect(state).toEqual([...expenses, new_expense]);
});
test('should edit an expense',()=>{
  const amount = 12200;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toEqual(amount);
})
