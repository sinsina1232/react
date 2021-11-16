import selectExpense from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
const defaultValue = { text: '', sortBy:'date', startDate: undefined, endDate: undefined };
test('should filter by test value', ()=>{
  const filters = { ...defaultValue, text:'e' };
  const result =selectExpense(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by startDate',()=>{
  const filters = { ...defaultValue, startDate: moment(0) };
  const result =selectExpense(expenses, filters);
  expect(result).toEqual([expenses[2],expenses[0]]);
});
//should filter by end date
test('should filter by end date',()=>{
  const filters = { ...defaultValue, endDate: moment(0).add(3, 'days') };
  const result = selectExpense(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});
// should sort out by date
test('should sort out by date',()=>{
  const filters = { ...defaultValue };
  const result = selectExpense(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
// should sort out by amount
test('should sortout by amount',()=>{
  const filters = { ...defaultValue, sortBy:'amount' };
  const result = selectExpense(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
