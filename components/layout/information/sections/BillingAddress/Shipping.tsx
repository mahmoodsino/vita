import React from 'react'
import { InfoInput } from '../../../../inputs'

const Shipping = () => {
  return (
    <div className='mt-5'>
      <div className="flex">
        <h3 className=" font-semibold">Shipping Address</h3>
        <span className="text-secondary">*</span>
      </div>
      <div className="lg:w-[87%]">
        <form className="w-full ">
          <div className="w-full">
            <InfoInput
              type="text"
              label="Street Address"
              placeholder="Lorem ipsum dolor sit amet consectetur."
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-5">
            <InfoInput type="text" label="City" placeholder="Lorem ipsum dol" />
            <InfoInput
              type="text"
              label="State / Province / Region"
              placeholder="Lorem ipsum dol"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-5">
            <InfoInput
              type="text"
              label="ZIP / Postal Code"
              placeholder="065344"
            />
            <InfoInput
              type="text"
              label="Country"
              placeholder="Lorem ipsum dol"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Shipping
