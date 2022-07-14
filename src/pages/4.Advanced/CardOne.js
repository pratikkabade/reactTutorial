import React from "react";
import { Link } from "react-router-dom";

const CardOne = () => {
  return (
    <div>
      <h1 className='noSelect' style={{ marginTop: 30 }}>
        Advanced
      </h1>
      <div className='all'>
        <div className='dvs' data-bs-toggle='modal' data-bs-target='#myModal12'>
          Visit the page <br />
        </div>
        <div className='dvs'>
          <Link className='nav-item nav-link' to='/Files'>
            Files
          </Link>
        </div>
      </div>
      {/* The Modal */}
      <div className='modal fade' id='myModal12'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {/* Modal Header */}
            <div className='modal-header'>
              <h4 className='modal-title'>Visit</h4>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
              />
            </div>
            {/* Modal footer */}
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-outline-dark'
                data-bs-dismiss='modal'>
                Close
              </button>
              <a
                href='git-client://clone?repo=https%3A%2F%2Fgithub.com%2Fpratikkabade%2FjavaTutorial'
                type='button'
                class='btn btn-outline-primary'>
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
