import React from 'react'

function copy2() {
    navigator.clipboard.writeText("npm run deploy");
}

const Deploy = () => {
  return (
    <div>
    <div className='dvs' id='dvsTop' style={{ width: "400px" }}>
        <h1>Final Deploy</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal11'>
          <div>
          <br/> run <kbd>npm run deploy</kbd> <br/>
            <br />
          </div>
        </div>
        {/* The Modal */}
        <div className='modal fade' id='myModal11'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <h4 className='modal-title'>Install</h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                />
              </div>
              {/* Modal body */}
              <div className='modal-body' style={{ width: "400px" }}>
                npm run deploy
              </div>
              {/* Modal footer */}
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-outline-dark'
                  data-bs-dismiss='modal'>
                  Close
                </button>
                <button
                  onclick={copy2()}
                  type='button'
                  class='btn btn-primary'>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Deploy