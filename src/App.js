import './css/App.scss';
import React from 'react'
import Header from './components/Header' 
import Form from './components/Form' 
import Results from './components/Results' 
import Footer from './components/Footer' 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     results : [],
     count: 0,
     next: null
    }
  }

  handleData = (results, count, next) => {
    console.log('from app',results);
    this.setState({results,count, next })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleData} />
        <Results result={this.state}/>
        <Footer />
      </div>
    );

  }
}

export default App;
