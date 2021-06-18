import React from 'react'
import '../css/Results.scss'
import ReactJson from 'react-json-view'
import If from './If-results.js' 


class Results extends React.Component {
    render() {

        return(
            <div className="section-data">
            <If condition={this.props.result.show}>
                <div className="output">
                    <p>Count : {this.props.result.count}</p>
                    <ReactJson src={this.props.result.headers}  name='Headers'  theme="Solarized"/>
                    <ReactJson src={this.props.result.results}  name='Results' theme="Solarized"/>
                </div>   
            </If>
            </div>
        )
    }
}



export default Results 


