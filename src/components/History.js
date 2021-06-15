import '../css/History.scss'

const History = (props) => {
    return (
        <div className="queries">
            {props.queries.history.map(item => {
                return <p >{item.method} ======= {item.url} </p>
            })}
        </div>
    )
}

export default History
