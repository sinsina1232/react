import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleOkayOption = this.handleOkayOption.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(()=>({options}));
      }
    }catch(e){
        //do nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);
    }
  }
  componentWillUnmount(){

  }
  handleOkayOption(){
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // use setState to set the selectedOption
    this.setState(()=>({
      selectedOption: option
    }));


  };
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
      option: ''
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
      <div className="widget">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>

      </div>
      <OptionModal
        handleOkayOption={this.handleOkayOption}
        selectedOption={this.state.selectedOption}/>

    </div>
    );
  }
}
