import React from 'react'
import '../css/Form.scss'
// import { useState } from "react"
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            method: ''
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
        let raw = await fetch(this.state.url)
        let data = await raw.json()
        console.log(data);
        const result = data.results
        const count = data.count
        return  this.state.method === 'GET' ? this.props.handler(result, count, data.next) : ''
        
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

