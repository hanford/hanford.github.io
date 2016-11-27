import React from 'react'
import { Dialog, Button } from '@blueprintjs/core'

import SnapCode from './snapcode.png'
import './style.css'

export default ({ showSnapModal, toggleSnapModal }) => {
  return (
    <Dialog
      iconName="inbox"
      isOpen={showSnapModal}
      onClose={toggleSnapModal}
    >
      <div className="pt-dialog-body">
        <img src={SnapCode} className='snapcode' />
      </div>
      <div className="pt-dialog-footer">
        <div className="pt-dialog-footer-actions">
            <Button onClick={toggleSnapModal} text="Close" />
        </div>
      </div>
    </Dialog>
  )
}
