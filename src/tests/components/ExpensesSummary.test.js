import React from 'react';
import { shallow } from 'enzyme';
import  ExpensesSummary  from '../../components/ExpensesSummary';

test('should correctly render expenses summary with one expense',()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();

});
test('should correctly render expenses summary with one expense',()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={2323435}/>);
  expect(wrapper).toMatchSnapshot();
});
