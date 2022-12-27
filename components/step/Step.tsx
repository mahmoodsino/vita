import React from 'react'

interface Props {
    color: string;
    title: string;
  }

const Step = ({color,title}:Props) => {
  return (
    <div
      style={{ borderLeft: `4px solid ${color}` }}
      className={`h-[80px] border-l-4 w-20  relative`}
    >
      <div
        style={{ backgroundColor: `${color}` }}
        className={`h-8 w-8  absolute m-auto right-[80%] flex justify-center items-center  rounded-full`}
      >
        {color !== "#D9D9D9" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="35"
            fill="white"
            className=" bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        )}
      </div>
      <h4 className="left-[30%] top-[6%] text-lg font-semibold absolute whitespace-nowrap">
        {title}
      </h4>
    </div>
  )
}

export default Step
