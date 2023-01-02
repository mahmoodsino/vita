import React from "react";
import { SignupInput } from "../../../../inputs";
import { useForm, useFieldArray, Controller } from "react-hook-form";

const OccupationandMedicalH = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {}
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <SignupInput
          label="What is your occupation?"
          type="text"
          placeholder="PM"
        />
        <SignupInput label="Past medical and surgical history" type="text" />
        <div>
          {fields.map((item, index) => (
            <div key={index} className="w-full flex items-center  mt-3 space-x-3">
              <input
                key={item.id}
                className="outline-none border w-full rounded-md border-dashed border-gray2/80  py-1.5 px-3"
                {...register(`test.${index}.firstName`)}
              />
              <button
                type="button"
                className="text-red-600 underline font-semibold text-lg"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="text-gray2 underline mt-2"
          onClick={() => append({ firstName: "" })}
        >
          + Add PMH & SH
        </button>
      </form>
    </div>
  );
};

export default OccupationandMedicalH;
