import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import React from 'react';
import { shallow } from 'enzyme';

test('should render expenselist with expenses',()=>{
const wrapper = shallow(<ExpenseList expenses={expenses}/>);
expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message',()=>{
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
