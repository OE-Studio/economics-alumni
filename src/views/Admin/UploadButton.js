import React from 'react'
import {
   
    MdOutlineAdd,
  } from "react-icons/md";

const UploadButton = ({clickHandler, customStyle}) => {
  return (
    <div className={`${customStyle} space-x-3 items-center justify-start p-2.5 border border-grey-100 cursor-pointer text-[#737373] font-medium`} onClick={clickHandler}>
            <div className="h-[24px] w-[24px] flex items-center justify-center">
              <MdOutlineAdd className="text-xl text-grey-200" />
            </div>
            <p className="text-base font-medium">Upload document</p>
          </div>
  )
}

export default UploadButton