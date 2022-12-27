import React, { useState } from 'react'

interface Props {
    data:any[],

}

const Tabs = ({data}:Props) => {
    const [name,setName] = useState("")

    return (
        <div className="border-b-4 flex justify-between">
          {data.map((item,i) => {
            return(
              <button className={`text-lg mt-5 font-medium relative top-1 pb-2   ${name===item ? "text-primary border-b-4 border-b-primary" : "text-gray2"}`} onClick={() => setName(item)} key={i}>{item}</button>
            )
          })}
  
        </div>
  )
}

export default Tabs
