import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
   return <h1>hello ji </h1>;
}

class Headercheck extends React.Component{
   render(){
      return <div><Header/>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>

   } 
}
ReactDOM.render(//<Header/>,
   <Headercheck/>,
   document.getElementById('root') 
    );