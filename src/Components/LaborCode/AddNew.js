import React from 'react'

function AddNew({props}) {
    return (
        <form>
            <div className="card p-3 rounded-0 ">
                <div className="form-group row ">
                    <div className="col-md-3 text-end">
                        <label>{props.label1}+':'</label>
                    </div>
                    <div className="col-md-9 rounded-0">
                        <input type="text" className="form-control rounded-0 mb-2" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-3 text-end">
                        <label>Billing Codes:</label>
                    </div>
                    <div className="col-md-9 ">
                        <input type="text" className="form-control rounded-0 mb-2" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-3 text-end">
                        <label>Default Rates(Hourly):</label>
                    </div>
                    <div className="col-md-9 ">
                        <input type="text" className="form-control rounded-0" />
                    </div>
                </div>
            </div>
            <div className='text-end m-2'>
                <button className='btn btn-outline-danger rounded-0 me-2'>Clear</button>
                <button className='btn btn-outline-danger rounded-0'>Save</button>
            </div>
        </form>
    )
}

export default AddNew