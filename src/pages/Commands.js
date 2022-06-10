import React from 'react'

const Commands = () => {
  return (
    <div>
      <div className='dvs' id='dvsTop' style={{"width":'400px'}}>
        <h1>Add homepage</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal8'>
          <div>
            <br/> Add <kbd>homepage</kbd> to <kbd>package.json</kbd> <br/>
          </div>
        </div>
        {/* The Modal */}
        <div className='modal fade' id='myModal8'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <h4 className='modal-title'>package.json</h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                />
              </div>
              {/* Modal body */}
              <div className='modal-body' style={{"width":'400px'}}>
                "homepage": "https://myusername.github.io/my-app",
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

export default Commands