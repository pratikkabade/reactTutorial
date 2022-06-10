import React from "react";

function copy1() {
    navigator.clipboard.writeText("npm install --save gh-pages");
}

const Install = () => {
  return (
    <div>
      <div className='dvs' id='dvsTop' style={{ width: "400px" }}>
        <h1>Add homepage</h1>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal9'>
          <div>
            <br /> Install <kbd>gh-pages</kbd> <br />
            <br />
          </div>
        </div>
        <div
          className='sub-dvs'
          data-bs-toggle='modal'
          data-bs-target='#myModal10'>
          <div>
            add deploy to <kbd>scripts</kbd> in <kbd>package.json</kbd> <br />
          </div>
        </div>
      </div>
      {/* The Modal */}
      <div className='modal fade' id='myModal9'>
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
              npm install --save gh-pages
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
                onclick={copy1()}
                type='button'
                class='btn btn-primary'>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* The Modal */}
      <div className='modal fade' id='myModal10'>
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
              "predeploy": "npm run build", <br />
              "deploy": "gh-pages -d build",
            </div>
            <div className='modal-header'>paste this here "scripts":</div>
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
  );
};

export default Install;
