import React from 'react'

import './title.css'

export default ({ content, noMargin }) => {
  if (!noMargin) {
    return <div className='title'>{content}</div> 
  } else {
    return <div className='title noMargin'>{content}</div> 
  }
}
