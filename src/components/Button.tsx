import React from 'react'

function ButtonPrimary({ btnName}:any) {
  return (
    <>
      <div className="bg-[#C40000] text-white font-bold py-2 px-4 rounded">
        {btnName}
      </div>
    </>
  )
}

export default ButtonPrimary