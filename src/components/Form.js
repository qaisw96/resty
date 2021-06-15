import React from 'react'
import '../css/Form.scss'
import superagent from 'superagent'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            method: null,
            body: null 
        }
    }

    addMethod = (method) => {
        this.setState({method: method})
    }

    submitForm = async (e) => {
        try {
            e.preventDefault()
            let newUrl = e.target.url.value
            let newBody = e.target.body.value
            await this.setState({url: newUrl , body: newBody})
    
            let res;
                res = await superagent[`${this.state.method.toLocaleLowerCase()}`](newUrl).send({newBody})
                this.props.handler(res.headers, res.body, res.body.length)
    
                this.props.handleQueries(this.state.method, this.state.url)            
                return res.body? this.props.checkResults(true) : this.props.checkResults(false)
        } catch (e) {
            this.props.handler("ERROR", "ERROR", "ERROR")
        }
    }
    
    
    render() {
        return (
            <form onSubmit= {this.submitForm}>
                <div className="sub-form">
                    <input className="input-url" name="url" required />
                    <input className="btn" type="submit" /> 
                    <p>Body : </p>
                    <textarea type="text" name="body" cols="30" rows="5"></textarea>
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

