import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//const date = new Date();
const now = moment();
console.log(now.format('MMMM Do, YYYY'));
export default class ExpenseForm extends React.Component{
  state = {
    description:'',
    note:'',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  };
  onDescriptionChange = (e)=>{
    const description = e.target.value;
    this.setState(()=>({ description }));
  };
  onChangeTextArea = (e)=>{
    const note = e.target.value;
    this.setState(()=>({ noteue }));
  };
  onAmountChange = (e) =>{
    const amount = e.target.value;
    if(amount.match(/^\d{1,9}(\.\d{0,2})?$/)){
        this.setState(()=>({ amount }));
    }
  };
    onDateChange = (createdAt) =>{
      this.setState(()=>{ createdAt });
    };
    onFocusChange = ({ focused }) =>{
      this.setState(()=>({ calendarFocused: focused }));
    };

  render(){
    return (
      <div>
        <form>
            <input
                type="text"
                placeholder="description"
                value={this.state.desciption}
                onChange={this.onDescriptionChange}
                autoFocus
              />
            <input
                type="text"
                value={this.state.amount}
                placeholder="Amount"
                onChange={this.onAmountChange}
            />

            <SingleDatePicker
              date= {this.state.createdAt}
              onDateChange={this.onDateChange}
              focused= {this.state.calendarFocused}
              onFocusChange={this.onFocusChange}

            />
            <textarea
                placeholder="Add a note for your input*(optional)"
                value={this.state.note}
                onChange={this.onChangeTextArea}
            />
            <button>
              Add Expense
            </button>
        </form>
      </div>
    )
  }
}
