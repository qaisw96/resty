import '../css/History.scss'
import If from './If-results'
import {Link} from 'react-router-dom'

const History = ({queries, getQuery, show}) => {
    return (
        <div className="history">
            <div className="queries">
            <h3>Previous Queries : </h3>
                {queries.map((item, idx) => {
                    return <p key={idx} onClick={() => getQuery(item.method, item.url)} > <span>{item.method} >></span>  {item.url} </p>
            })}
            </div>
            <section>
                
                <If condition={show}>
                    <span>
                        <Link to="/" onClick={() => alert('everything is ready, just click submit in the form')}>Re-run</Link>
                    </span>
                </If>
                
            </section>
        </div>
    )
}

export default History
