import '../css/History.scss'

const History = ({queries, getQuery}) => {
    return (
        <div className="queries">
            {queries.map((item, idx) => {
                return <p key={idx} onClick={() => getQuery(item.method, item.url)} >{item.method} ======= {item.url} </p>
            })}
        </div>
    )
}

export default History
