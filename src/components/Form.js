import React from 'react'
import '../css/Form.scss'
import superagent from 'superagent'

class Form extends React.Component {

    
    submitForm = async (e) => {
        try {
            e.preventDefault()
            let url = e.target.url.value
            let body = e.target.body.value
            let method = e.target.method.value
            const Form = {url, body, method} 
            let res = await superagent[`${method}`](url).send({body})
            const headers = res.headers
            const results = res.body
            this.props.getFormData(Form, headers, results) 
            this.props.query.url = null
            
            return res.body? this.props.handleShow(true) : this.props.handleShow(false)
        } catch (e) {
            this.props.handleShow("ERROR", "ERROR", "ERROR")
        }
    }
    
    render() {
        return (
            <form id="form" onSubmit= {this.submitForm}>
                <div className="sub-form">
                    <input className="input-url" name="url" value={this.props.query.url} />
                    <input className="btn" type="submit" /> 
                    <p>Body : </p>
                    <textarea type="text" name="body" cols="30" rows="5"></textarea>
                </div>
                <div id='method'  className="crud">
                    <input type='radio' name='method' id='get' value='get' />
                    <label>GET</label>
                    <input type='radio' name='method' id='post' value='post'  />
                    <label>POST</label>
                    <input type='radio' name='method' id='put' value='put' />
                    <label>PUT</label>
                    <input type='radio' name='method' id='delete' value='delete'  />
                    <label>DELETE</label>
                </div>
            </form>
    )

} 

}
   
export default Form

