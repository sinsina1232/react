console.log('App.js is runing!');
// JSX -Javascript xml
const object = {
  title: 'Super cool' + '!',
  subtitle: 'This is some info',
  options: []
}
const appRoot = document.getElementById('app');

const onFormSubmit = (e)=>{
  e.preventDefault();
  const option = e.target.elements.options.value;
  if(option){
    object.options.push(option);
    e.target.elements.options.value ='';
    render();
  }
}
const resetCounter = ()=>{
  object.options = [];
  render();
}

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * object.options.length);
  const option = object.options[randomNum];
  alert(option);
}

const render = () =>{
  const template = (
        <div>
            <h1> {object.title}</h1>
            {object.subtitle && <p>{object.subtitle}</p>}
            <button disabled={object.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetCounter}>Remove all</button>
            <p>{(object.options && object.options.length > 0) ? 'Here are your options' : 'There are no option yet'}</p>
            <ol>
            {
               object.options.map((option) => <li key={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="options" />
            <button>Add option</button>
            </form>
        </div>
      );
ReactDOM.render(template,appRoot);
}
render();
