import React from 'react'
import './Loading.css'
const Loading = () => {
  return (
    <div className='loadingOverlay'>
        <div className='line-Progress'>
            <div className='indeterminate'>

            </div>
        </div>
    </div>
  )
}

export default Loading