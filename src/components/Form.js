import React from 'react'
import '../css/Form.scss'
import superagent from 'superagent'

class Form extends React.Component {

    submitForm = async (e) => {

        
        
        try {
            e.preventDefault()
            let method, url ;
            let body = e.target.body.value
            !this.props.query.url ?  url = e.target.url.value : url = this.props.query.url 
            !this.props.query.method ?  method = e.target.method.value : method = this.props.query.method 
            this.props.handleLoading(true)
            const Form = {url, body, method}
            let res = await superagent[`${method}`](url).send({body})
            this.props.handleLoading(false)
            const headers = res.headers
            const results = res.body
            this.props.getFormData(Form, headers, results) 
            this.props.query.url = null
            e.target.url.value = ''
            document.getElementById(method).checked = true 
            return res.body? this.props.handleShow(true) : this.props.handleShow(false)
        } catch (e) {
            this.props.handleShow("ERROR", "ERROR", "ERROR")
        }
    }

    
    
    render() {
        return (
            <form id="form" onSubmit= {this.submitForm}>
                <div className="sub-form">
                    <input className="input-url" name="url" onChange={this.handleChange} value={this.props.query.url} />
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

