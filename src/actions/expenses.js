import uuid from 'uuid';

export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) =>({
  type: 'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMPVE_EXPENSE
export const removeExpense = ({id} = {}) =>({
  type: 'REMOVE_EXPENSE',
  id
})
//EDITE_EXPENSE
export const editExpense = ((id,updates)=>({
  type: 'EDITE_EXPENSE',
    id,
    updates
  }
));
