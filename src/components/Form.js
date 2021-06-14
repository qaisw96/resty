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
        this.setState({method: method})
        this.addClass()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    addClass = (newMethod) => {
        console.log(newMethod);
        return this.state.method === newMethod ? '.on-click' : 'form-method'; 
    }



    render() {
        return (
            <form>
                <div className="sub-form">
                    <input className="input-url"  onChange={this.addUrl} required />
                    <button onClick={this.handleSubmit} >GO!</button>
                </div>
                <div className="crud">
                    <div value="get" className={() => this.addClass('GET')}  onClick={() => this.addMethod('GET')} >GET</div>
                    <div value="post" className={() => this.addClass('POST')}   onClick={() => this.addMethod('POST')}>POST</div>
                    <div value="put" className={() => this.addClass('PUT')}  onClick={() => this.addMethod('PUT')} >PUT</div>
                    <div value="delete" className={() => this.addClass('DELETE')}  onClick={() => this.addMethod('DELETE')} >DELETE</div>
                </div>
            </form>
    )

} 

}
   



export default Form

