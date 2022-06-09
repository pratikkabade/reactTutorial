import React from 'react'

const Link = () => {
  return (
    <div>
      <div className='dvs'>
        <h1>Link Page</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal6'>
          <div>
            Open <span style={{fontWeight: "600"}}>App.js</span> <br/>
            Link page using (NameOfPage|)
          </div>
        </div>
        {/* The Modal */}
        <div className='modal fade' id='myModal6'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <h4 className='modal-title'>Link Page</h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                />
              </div>
              {/* Modal body */}
              <div className='modal-header'>
              (NameOfPage|)
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

export default Link