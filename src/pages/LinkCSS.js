import React from 'react'

const LinkCSS = () => {
  return (
    <div>
        <div className='dvs'>
        <h1>Link CSS</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal7'>
          <div>
          <h1 style={{color: "red"}}>Hello Style!</h1>
          </div>
        </div>
        {/* The Modal */}
        <div className='modal fade' id='myModal7'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <h4 className='modal-title'>Link CSS</h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                />
              </div>
              {/* Modal body */}
              <div className='modal-body'>
              style=color: "red"
              </div>
              <div className='modal-header'>
              Use 2 Curly Brackets after "="
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

export default LinkCSS