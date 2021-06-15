import React from 'react'
import '../css/Form.scss'
import superagent from 'superagent'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            method: null
        }

    }
    addUrl = (e) => {
        this.setState({url:  e.target.value})
    }
    
    addMethod = (method) => {
        // console.log(this.props);
        this.setState({method: method})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let res;
        if(this.state.method === 'GET') {
            res = await superagent[`${this.state.method.toLocaleLowerCase()}`](this.state.url)
            this.props.handler(res.headers, res.body.results, res.body.count)
            console.log(res.headers, res.body.results, res.body.count);    
            return res.body.results? this.props.checkResults(true) : this.props.checkResults(false)
        } else {
            return
        }
    }

    render() {
        return (
            <form>
                <div className="sub-form">
                    <input className="input-url"  onChange={this.addUrl} required />
                    <button onClick={this.handleSubmit} >GO!</button>
                </div>
                <div className="crud">
                    <div value="get" className={this.state.method === 'GET'? 'on-click' :  'q'}  onClick={() => this.addMethod('GET')} >GET</div>
                    <div value="post" className={this.state.method === 'POST'? 'on-click' :  'q'}  onClick={() => this.addMethod('POST')}>POST</div>
                    <div value="put" className={this.state.method === 'PUT'? 'on-click' :  'q'} onClick={() => this.addMethod('PUT')} >PUT</div>
                    <div value="delete" className={this.state.method === 'DELETE'? 'on-click' :  'q'} onClick={() => this.addMethod('DELETE')} >DELETE</div>
                </div>
            </form>
    )

} 

}
   



export default Form

