import '../css/History.scss'

const History = ({queries, getQuery}) => {
    return (
        <>
        <div className="queries">
        <h3>Previous Queries : </h3>
            {queries.map((item, idx) => {
                return <p key={idx} onClick={() => getQuery(item.method, item.url)} > <span>{item.method} >></span>  {item.url} </p>
            })}
        </div>
        </>
    )
}

export default History
