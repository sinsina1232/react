import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div id="Info">
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const hoc = (Ali)=>{
  return (props) => (
      <div id="the-wrapper">
        <p>This is private info!. Please don't share these.</p>
        <Ali {...props}/>
      </div>
  );
};

//requireAuthentication ->


const  requireAuthentication = (Ali)=>{
  return(props)=>(
    <div>
      {props.isAuthenticated ? (
        <Ali {...props} />
      ):(
        <p>Please Login first!</p>
      )}
    </div>
  )
}
const AdminInfo = hoc(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={false} infos="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));
