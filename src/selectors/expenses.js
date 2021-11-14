// Get visible Expenses:
import moment from 'moment';
export default (expenses, {text, sortBy, startDate, endDate}) =>{
  return expenses.filter((expense)=>{
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
    const endDatematch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
    const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDatematch && textMatch;
  }).sort((a, b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1: -1;
    }else if(sortBy ==='amount'){
      return a.amount < b.amount ? 1: -1;
    }
  });
}
