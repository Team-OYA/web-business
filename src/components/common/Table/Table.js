function Table(props) {
    return (
        <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{props.tables.title}</h4>
                        <p className="card-description">{props.tables.description}</p>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    {
                                        props.tables.titles.map((title, index) => (
                                            <th key={index}>{title}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.tables.rows.map((row, index) => (
                                        <tr key={index}>
                                            {
                                                row.map((data, index) => (
                                                    <td key={index}>{data}</td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
