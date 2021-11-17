import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render expense list from expenses',()=>{
  const wrapper = shallow(<ExpenseList expenses={expenses} /> );
  expect(wrapper).toMatchSnapshot();
});
test('should render the message on the empty array',()=>{
  const wrapper = shallow(<ExpenseList expenses={[]} /> );
  expect(wrapper).toMatchSnapshot();
});
