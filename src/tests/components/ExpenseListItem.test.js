import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should render the first item of the fixture',()=>{
  const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
