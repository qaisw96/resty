import '../css/Form.scss'
import { useState } from "react"

const Form = () => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState([])
  
    function addUrl(e) {
        item.url = e.target.value
    }

    let met = 'get';
    function addMethod(e) {
        document.querySelector(`.${met}`).setAttribute('id', '')
        const el = document.querySelector(`.${e.target.classList[1]}`)
        el.setAttribute("id", "on-click")
        const method = e.target.innerText
        item.method= method
        met = e.target.classList[1]
    }
    function btnHandler(e) {
        document.querySelector(`.input-url`).value = ""
        e.preventDefault()
        if(!item.method || !item.url) {
            alert('Enter A Method Or A URL') 
            return
        }
        setItems([...items, item])
        setItem([''])
        document.querySelector(`.${item.method.toLowerCase()}`).setAttribute('id', '')
    }
    

    return (
        <form>
            <div className="sub-form">
                <input className="input-url"  onChange={addUrl} required />
                <button onClick={btnHandler} >GO!</button>
            </div>
            <div className="crud">
                <div value="get" className="btn get" onClick={addMethod} >GET</div>
                <div value="post" className="btn post" onClick={addMethod}>POST</div>
                <div value="put" className="btn put" onClick={addMethod}>PUT</div>
                <div value="delete" className="btn delete" onClick={addMethod}>DELETE</div>
            </div>
            <div className="output">
            {items.map(item => { 
               return <div>
                        <p>{item.method}</p>
                        <p>{item.url}</p>
                </div>
                })}

            </div>
        </form>
    )
}


export default Form
