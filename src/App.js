import React from 'react';
import AddToCart from './Components/AddToCart';
import Upload from './Components/Upload';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      label1: 'Add to Cart',
      label2: 'Upload',
      isDisabled: false,
      isOutlined: true,
      iconUrl: './upload.png',
      buttonStyle: ''
    }
  }
  
  selectButtonStyle = () => {
    const isDisabled = this.state.isDisabled;
    const isOutlined = this.state.isOutlined;

    if(isDisabled && isOutlined){
      this.setState({buttonStyle: 'isDisabled'})
    }
    else if(isDisabled && (isOutlined === false)){
      this.setState({buttonStyle: 'isDisabledAndFilled'})
    }
    else if((isDisabled === false) && isOutlined){
      this.setState({buttonStyle: 'isEnabled'})
    }
    else{
      this.setState({buttonStyle: 'isEnabledAndFilled'})
    }
  }

  componentDidMount(){
    this.selectButtonStyle();
  }

  render(){
    return (
      <div>
        <div className= "container">
          <AddToCart 
            label1 = {this.state.label1}
            buttonStyle = {this.state.buttonStyle}   
          />
          <Upload 
            label2 = {this.state.label2} 
            iconUrl = {this.state.iconUrl} 
            buttonStyle = {this.state.buttonStyle}     
          />
        </div>
      </div>
    );
  }
}

export default App;
