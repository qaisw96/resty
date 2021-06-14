import './css/App.scss';
import React from 'react'
import Header from './components/Header' 
import Form from './components/Form' 
import Footer from './components/Footer' 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      url : '',
      method: 'get'
    }
  }

  handleData = (url) => {
    console.log('handled');
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleData} />
        <Footer />
      </div>
    );

  }
}

export default App;
