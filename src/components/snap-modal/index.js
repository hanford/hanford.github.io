import React from 'react'
import Modal from 'react-modal'

import SnapCode from './snap-code.jpg'

export default ({ showSnapModal, toggleSnapModal }) => {
  return (
    <Modal
      isOpen={showSnapModal}
      // onAfterOpen={afterOpenFn}
      onRequestClose={toggleSnapModal}
      shouldCloseOnOverlayClick={true}
      // closeTimeoutMS={n}
      // style={customStyle}
      contentLabel="Modal"
    >
      <img src={SnapCode} />
      <button onClick={toggleSnapModal}>Close</button>
    </Modal>
  )
}
