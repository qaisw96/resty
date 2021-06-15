import './css/App.scss';
import React from 'react'
import Header from './components/Header' 
import Form from './components/Form' 
import Results from './components/Results' 
import Footer from './components/Footer' 
import History from './components/History' 


class App extends React.Component {
  constructor() {
    super()
    this.state = {
     headers : {},
     results: {},
     count: 0,
     show: false,
     history: localStorage.getItem('history')? JSON.parse(localStorage.getItem('history')) : []
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

  handleHistoryQueries = async (method, url) => {
    let query = {method: method, url: url}
    console.log('query', query);
    await this.setState({history: [...this.state.history, query]})
    console.log('this.state.history ======>', this.state.history);

    localStorage.setItem('history',JSON.stringify(this.state.history))
    console.log( 'from local storage =========', JSON.parse(localStorage.getItem('history')));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleData} checkResults={this.handleShow} handleQueries= {this.handleHistoryQueries} />
        <div className="display" >
          <History queries={this.state}  />
          <Results result={this.state}/>
        </div>
        <Footer />
      </div>
    );

  }
}

export default App;
