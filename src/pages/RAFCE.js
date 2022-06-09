import React from 'react'

const RAFCE = () => {
  return (
    <div>
      <div className='dvs'>
        <h1>Create Page</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal5'>
          <div>
            Use this command <br/>
            rafce
          </div>
        </div>
        {/* The Modal */}
        <div className='modal fade' id='myModal5'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <h4 className='modal-title'>Create Page</h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                />
              </div>
              {/* Modal body */}
              <div className='modal-body'>
              rafce
              </div>
              {/* Modal footer */}
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-outline-dark'
                  data-bs-dismiss='modal'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RAFCE