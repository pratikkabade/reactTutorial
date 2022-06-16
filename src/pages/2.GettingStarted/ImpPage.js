import React from "react";

const ImpPage = () => {
  return (
    <div>
      <div className='dvs'>
        <h1>Basic Pages</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal4'>
          <div>
          public\index.html <br/>
          src\App.js <br/>
          src\Index.js
          </div>
        </div>
        {/* The Modal */}
        <div className='modal fade' id='myModal4'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <h4 className='modal-title'>Basic Pages</h4>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                />
              </div>
              {/* Modal body */}
              <div className='modal-body'>

                
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
  );
};

export default ImpPage;
