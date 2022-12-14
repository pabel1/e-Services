import React from 'react'
import { useSelector } from 'react-redux'
import './Loading.css'
const Loading = () => {
  const loader=useSelector(state=>state.loader.loader)
  console.log(loader);
  
  return (
    <div className={loader}>
        <div className='line-Progress'>
            <div className='indeterminate'>

            </div>
        </div>
    </div>
  )
}

export default Loading