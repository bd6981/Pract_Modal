//rfce
import React from 'react'
import './Modal.css';

function Modal({closeModal}) {
  return (
    <div className="modBack">
        <div className="modContainer">
            <div calssName='titleCloseBtn'>
            <button onClick={() =>
                closeModal(false)}>X</button></div>
            <div className='title'>
                <h1>Want to Continue?</h1></div>
            <div className='body'>
                <p>Next page is cool! you should move forward!</p></div>
            <div className='footer'>
                <button className= 'cancelBtn' id='cancelBtn' onClick={() =>closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
            
      </div>
    </div>
  )
}

export default Modal
