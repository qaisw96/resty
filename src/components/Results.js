import React from 'react'
import '../css/Results.scss'
import ReactJson from 'react-json-view'


class Results extends React.Component {
    render() {
        console.log();

        return(
            <div className="output">
                <p>Count : {this.props.result.count}</p>
                <p>Next : {this.props.result.next}</p>
                Results : 
                <ReactJson src={this.props.result.results}  theme="Solarized"/>
            </div>   
        )
    }
}



export default Results 