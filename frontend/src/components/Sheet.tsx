const Sheet = () => {
    return (
        <>
            <div className="flex justify-center py-10">
                <table className="table-auto"> 
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Date Posted</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Link</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bank of America</td>
                            <td>Global Technology Summer Analyst 2026 - Software Engineer</td>
                            <td>6/15</td>
                            <td>8/9</td>
                            <td>Applied</td>
                            <td>BOA</td>
                            <td>Used Personal Email</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
 
export default Sheet; 