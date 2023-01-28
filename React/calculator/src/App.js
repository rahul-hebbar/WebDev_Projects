import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      previousnumber: "",
      nextnumber: "",
      operator: "",
      eqstate: "0"
    };
  }
  addToInput = val =>{
    if(this.state.eqstate === '1'){ 
      this.state.input = "";
      this.state.eqstate = '0';
    }
    this.setState({ input: this.state.input + val});
  }
  addZeroInput = val =>{
    if(this.state.eqstate === '1'){ 
      this.state.input = "";
      this.state.eqstate = '0';
    }
    if(this.state.input !== ""){
      this.setState({ input: this.state.input + val}); 
    }
  }
  addDecimal = val =>{
    if(this.state.input.indexOf(".") === -1){
      if(this.state.input === ""){
        this.state.input = 0;
        this.setState({ input: this.state.input + "."});
      }
      else{
        this.setState({ input: this.state.input + "."});
      }
    }
  }

  addClear = () =>{
    if(this.state.input !== ""){
      this.setState({ input : ""});
    }
  }

  add = () =>{
    this.state.previousnumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  }

  div = () =>{
    this.state.previousnumber = this.state.input;
    this.setState({ input: ""})
    this.state.operator = "div"
  }

  mul = () =>{
    this.state.previousnumber = this.state.input;
    this.setState({ input: ""})
    this.state.operator = "mul"
  }

  sub = () =>{
    this.state.previousnumber = this.state.input;
    this.setState({ input: ""})
    this.state.operator = "sub"
  }

  equal = val =>{
    this.state.eqstate = '1';
    this.state.nextnumber = this.state.input;
    var a = parseFloat(this.state.previousnumber);
    var b = parseFloat(this.state.nextnumber);
    var ans = b
    if(this.state.operator === 'plus'){
      ans = a+b;
    }
    else if(this.state.operator === 'sub'){
      ans = a-b;
    }
    else if(this.state.operator === 'mul'){
      ans = a*b;
    }
    else if(this.state.operator === 'div'){
      ans = a/b;
    }
    this.setState({ input: ans });
    this.state.operator = ""
  }

  render(){
  return (
    <div className='App'>
      <div className = 'calc-wrapper'>
      <h1>Calulator</h1>
        <div className = 'row'>
          <Input>{this.state.input}</Input>
        </div>
        <div className = 'row'>
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.div}>/</Button>
        </div>
        <div className = 'row'>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.mul}>*</Button>
        </div>
        <div className = 'row'>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
        </div>
        <div className = 'row'>
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroInput}>0</Button>
          <Button handleClick={this.equal}>=</Button>
          <Button handleClick={this.sub}>-</Button>
        </div>
        <div className = 'row'>
          <Clear handleClear={this.addClear}>CLEAR</Clear>
        </div>
      </div>
    </div>
  );
}
}

export default App;
