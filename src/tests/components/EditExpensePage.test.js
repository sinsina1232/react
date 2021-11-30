import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';

let editExpense, removeExpense, wrapper, history;
beforeEach(()=>{
   editExpense = jest.fn();
   removeExpense = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
      />);
});

test('should render editExpense page',()=>{
expect(wrapper).toMatchSnapshot();
});

test('should edit the expenses correctly ',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should remove the expenses correctly ',()=>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});
