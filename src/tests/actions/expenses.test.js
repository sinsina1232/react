import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () =>{
  const action = removeExpense({ id: '123bsa'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123bsa'
  });
});

test('testing the edit function of expense actions',()=>{
  const id = "als234";
  expect(editExpense("als234", { note: 'New note' })).toEqual({
    type: 'EDITE_EXPENSE',
    id: 'als234',
    updates:{
      note: 'New note'
    }
  });
});

test('should setup addExpense action object with provided value',()=>{
  const expenseData = {description:'Water', amount:2000, createdAt: 1000, note:'this was last month rent'};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
    ...expenseData,
    id:expect.any(String)
  }
  });
});
test('sheould setup addExpense action object with default values',()=>{
 expect(addExpense()).toEqual({
   type: 'ADD_EXPENSE',
   expense:{
     description:'',
     amount:0,
     note:'',
     createdAt:0,
     id:expect.any(String)
   }
 });
});
