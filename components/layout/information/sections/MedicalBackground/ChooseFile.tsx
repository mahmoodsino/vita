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
      <div className="mt-5 flex justify-between items-center space-x-8  w-[65%]">
        <div>
          <h3 className=" font-semibold">Lab test results</h3>
          <span className="text-xs">Optional</span>
        </div>
        <div className="w-[385.8px]">
          <div
            {...getRootProps({ onClick: (e) => e.preventDefault() })}
            className=""
          >
            <label className="flex justify-center  w-full   transition bg-[#EAEAEA]  rounded-full  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <h4 className="text-gray1 bg-[#D8D8D8] px-5 py-5 rounded-full font-semibold h-full  text border whitespace-nowrap">
                    Choose File
                  </h4>
                  {file?.name ? (
                    <span className="text-[#888888] font-medium text-lg px-3">
                      {file.name}
                    </span>
                  ) : (
                    <span className="text-[#888888] font-medium text-lg px-3 whitespace-nowrap">
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
        <div className=" w-[72%] mt-3 flex justify-end space-x-3 ">
          <div className="w-[385.8px]">
            <div
              {...getRootProps({ onClick: (e) => e.preventDefault() })}
              className=""
              key={item.id}
            >
              <label className="flex justify-center  w-full   transition bg-[#EAEAEA]  rounded-full  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-gray1 bg-[#D8D8D8] px-5 py-5 rounded-full font-semibold h-full  text border">
                      Choose File
                    </h4>
                    {file?.name ? (
                      <span className="text-[#888888] font-medium text-lg px-3">
                        {file.name}
                      </span>
                    ) : (
                      <span className="text-[#888888] font-medium text-lg px-3">
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
            className="text-red-600 underline font-semibold text-lg"
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
