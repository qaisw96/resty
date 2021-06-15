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
     headers : {},
     results: {},
     count: 0,
     show: false
    }
  }

  handleData = (headers, results, count) => {
    console.log('from app',results);
    this.setState({headers,results, count})
  }

  handleShow = (check) => {
    console.log(check);
    this.setState({show: check})
  } 


  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleData} checkResults={this.handleShow} />
        <Results result={this.state}/>
        <Footer />
      </div>
    );

  }
}

export default App;
