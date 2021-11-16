import filtersReducer from '../../reducers/filters';
import moment from 'moment';
const defaultValues = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
test('should setup default values',()=>{
  const state = filtersReducer(undefined, { type: '@@INIT' } );
  expect(state).toEqual(defaultValues);
});
//Case SORT_BY_DATE
test('should set sortBy to amount',()=>{
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});
test('should change the state to SORT_BY_DATE',()=>{
  const filtersReducerDefaultStatus = {
    ...defaultValues, sortBy: 'amount'
  };
  const state = filtersReducer(filtersReducerDefaultStatus, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});
//should set text filter
test('should set the text filter',()=>{
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text:'This is the test text' });
  expect(state.text).toBe('This is the test text');
});
// should set start endDate
test('should set the start date on demand',()=>{
  const startDate = moment(1000);
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toBe(startDate);
});
// should set end date filter
test('should set the end date on demand',()=>{
  const endDate = moment(1000);
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toBe(endDate);
});
