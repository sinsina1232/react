import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate setStartDate action object',()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object',()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('set the text filter for the filter action object with value',()=>{
  const action = setTextFilter('Testing');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'Testing'
  });
});

test('set the text filter for the filter action object with default',()=>{
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  });
});

test('set the Sorting by the Amount',()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  });
});

test('set the Sorting by the date with the empty value',()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  });
});
