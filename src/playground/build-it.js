
class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleVisibilitytoggle = this.handleVisibilitytoggle.bind(this);
    this.state= {
      visible: false
    };
  }
    handleVisibilitytoggle(){
      this.setState((prevState)=>{
        return{
              visible: !prevState.visible
          }
      })
    }
  render(){
    return(
      <div>
      <h2>The Visibility test!</h2>
      <button onClick={this.handleVisibilitytoggle}> {this.state.visible ? 'Hide the text':'Show Text'}</button>
      {this.state.visible &&
        <div>
          <p>Some text to show</p>
        </div>}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app') );
