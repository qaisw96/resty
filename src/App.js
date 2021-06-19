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
     show: false,
     load: false,
     history: localStorage.getItem('history')? JSON.parse(localStorage.getItem('history')) : [],
     query: {
       url: null
     }
    }
  }

  getFormData = async (Form, headers, results) => {
    console.log('from app before storing LS', Form);
    console.log(Form, headers, results);
     this.setState({headers, results})
     let query = {method: Form.method, url: Form.url}
     this.setState({history: [...this.state.history, query]})
     localStorage.setItem('history',JSON.stringify(this.state.history))
  }
  
  handleShow = (check) => {
    this.setState({show: check})
  }
  
  handleLoading = (load) => {
    this.setState({load: load})
  }

  getQueryFromHistory =  (method, url) => {
     this.setState({query: {method, url}})
  }
  

  render() {
    return (
      <div className={this.show ? 'hidden': 'visible'} >
        <Header />
        <Form getMethod={this.getMethod} getFormData={this.getFormData} handleShow= {this.handleShow} query={this.state.query} handleLoading={this.handleLoading} />
        <div className="display" >
          <History queries={this.state.history}  getQuery={this.getQueryFromHistory} />
          <Results result={this.state}/>
        </div>
        <Footer />
      </div>
    );

  }
}

export default App;
