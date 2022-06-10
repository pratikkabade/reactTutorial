import React from "react";

function copy01() {
  navigator.clipboard.writeText("npx create-react-app app");
}
function copy02() {
  navigator.clipboard.writeText("npm start","cd app");
}

const Initialization = () => {
  return (
    <div>
      <h1 className='noSelect' style={{ marginTop: 85 }}>
        React Basics{" "}
      </h1>
      <h2 className='noSelect' style={{ margin: 30, textAlign: "center" }}>
        Initialization{" "}
      </h2>
      <div className='all'>
        <div className='dvs' id='dvsTop'>
          <h1>Dependancies</h1>
          <div
            className='sub-dvs'
            data-bs-toggle='modal'
            data-bs-target='#myModal1'>
            Node <br />
            Visual Studio Code
          </div>
          {/* The Modal */}
          <div className='modal fade' id='myModal1'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                {/* Modal Header */}
                <div className='modal-header'>
                  <h4 className='modal-title'>Links</h4>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                  />
                </div>
                {/* Modal body */}
                <div className='modal-body '>
                  <a className='btn btn-primary' href='https://nodejs.org/'>
                    Node <i className='fa-solid fa-up-right-from-square' />
                  </a>
                  <a
                    className='btn btn-primary'
                    href='https://code.visualstudio.com/download'>
                    VS Code <i className='fa-solid fa-up-right-from-square' />
                  </a>
                  <br />
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

        <div className='dvs' id='dvsTop'>
          <h1>Create & Start</h1>
          <div
            className='sub-dvs'
            data-bs-toggle='modal'
            data-bs-target='#myModal2'>
            1. npx create-react-app app <br/>
            2. npm start
          </div>
          {/* The Modal */}
          <div className='modal fade' id='myModal2'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                {/* Modal Header */}
                <div className='modal-header'>
                  <h4 className='modal-title'>Create & Start</h4>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                  />
                </div>
                {/* Modal body */}
                <div className='modal-body' onclick={copy01()}>npx create-react-app app</div>
                <div className='modal-body' onclick={copy02()}>npm start <br/> cd app</div>
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
    </div>
  );
};

export default Initialization;
