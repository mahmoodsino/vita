import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFieldArray, useForm } from "react-hook-form";

const ChooseFile = () => {
  const [file, setFile] = useState<any>();

  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {}
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <div>
      <div className="mt-5 flex md:flex-row sm:flex-col justify-between md:items-center md:space-x-8  md:w-[65%]">
        <div>
          <h3 className=" font-semibold">Lab test results</h3>
          <span className="text-xs">Optional</span>
        </div>
        <div className="md:w-[385.8px]">
          <div
            {...getRootProps({ onClick: (e) => e.preventDefault() })}
            className=""
          >
            <label className="flex   w-full   transition bg-[#EAEAEA]  rounded-full  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex  items-center space-x-2">
                <div className="flex  items-center  space-x-2">
                  <h4 className="text-gray1  bg-[#D8D8D8] md:px-5 md:py-5 sm:px-2 sm:py-1 sm:text-sm md:text-base rounded-full md:font-semibold h-full  text border whitespace-nowrap">
                    Choose File
                  </h4>
                  {file?.name ? (
                    <span className="text-[#888888] sm:text-sm md:font-medium md:text-lg px-3">
                      {file.name}
                    </span>
                  ) : (
                    <span className="text-[#888888] sm:text-sm md:font-medium md:text-lg px-3 whitespace-nowrap">
                      No file chosen to upload
                    </span>
                  )}
                </div>
              </span>
              <input {...getInputProps()} className="" />
            </label>
          </div>
        </div>
      </div>
      {fields.map((item, index) => (
        <div key={index} className=" md:w-[72%] mt-3 flex justify-end space-x-3 ">
          <div className="md:w-[385.8px]">
            <div
              {...getRootProps({ onClick: (e) => e.preventDefault() })}
              className=""
              key={item.id}
            >
              <label className="flex md:justify-center  w-full   transition bg-[#EAEAEA]  rounded-full  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-gray1 bg-[#D8D8D8] md:px-5 md:py-5 sm:px-2 sm:py-1 sm:text-sm md:text-base rounded-full md:font-semibold h-full  text border">
                      Choose File
                    </h4>
                    {file?.name ? (
                      <span className="text-[#888888] font-medium text-lg px-3">
                        {file.name}
                      </span>
                    ) : (
                      <span className="text-[#888888] sm:text-sm md:font-medium md:text-lg px-3">
                        No file chosen to upload
                      </span>
                    )}
                  </div>
                </span>
                <input
                  {...register(`test.${index}.file`)}
                  {...getInputProps()}
                  className=""
                />
              </label>
            </div>
          </div>
          <button
            type="button"
            className="text-red-600 underline md:font-semibold sm:text-sm md:text-lg"
            onClick={() => remove(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-pink1 underline mt-2"
        onClick={() => append({ firstName: "" })}
      >
        +Add another file
      </button>
    </div>
  );
};

export default ChooseFile;
