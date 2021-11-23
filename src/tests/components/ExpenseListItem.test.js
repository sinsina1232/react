import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import React from 'react';
import { shallow } from 'enzyme';

test('should render single element from the fixture',()=>{
  const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />);
  expect(wrapper).toMatchSnapshot();
});
