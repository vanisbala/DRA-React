import React from 'react'

function Table({props}) {
    return (
        <table class="table table-striped">
            <thead className="" style={{ backgroundColor: 'maroon', color: 'white' }}>
                <tr>
                    <th scope="col">{props.col1}</th>
                    <th scope="col">Billing Codes</th>
                    <th scope="col"> Default Rates/Hr.</th>
                    <th scope="col">Active</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Project Manager</td>
                    <td>PM</td>
                    <td>$80/Hr.</td>
                    <td>Y</td>
                    <td>Edit</td>
                    <td>Deactivate</td>

                </tr>
                <tr>
                    <td>Project Manager Mechanical</td>
                    <td>PM-M</td>
                    <td>$60/Hr.</td>
                    <td>Y</td>
                    <td>Edit</td>
                    <td>Deactivate</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table