import React from 'react'
import { useSelector } from 'react-redux';
import './Progress.css'
const FullScreenLoader = () => {

  const loader=useSelector(state=>state.loader.loader)
  console.log(loader);

  return (
    <>
    <div className={loader}>
        <div className='line__progress'>
            <div className='indeterminate'>

            </div>
        </div>
    </div>
    </>
  )
}

export default FullScreenLoader