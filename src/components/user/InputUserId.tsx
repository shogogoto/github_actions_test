import React, { FC, VFC, useEffect } from "react";
// import { Path, UseFormRegister, useFormContext,  } from "react-hook-form";
import {
  UseFormRegister,
  DeepMap,
  FieldError,
  useFormContext
} from "react-hook-form";
import { FormInput} from "./RegisterUserForm";

type InputProps = {
  register: UseFormRegister<FormInput>;
  errors: DeepMap<FormInput, FieldError>;
};

const InputUserId: VFC = () => {
  const { register, formState: { errors }  } = useFormContext<FormInput>();
  // const { register, errors  } = useFormContext();

  // useEffect(() => {
  //   console.log(JSON.stringify(errors));
  // });
  // console.log(errors);
  return (
    <>
      <label htmlFor="userId">ID</label>
      <input
        id="userId"
        placeholder="ID"
        aria-invalid={errors.userId ? "true": "false"}
        {...register("userId", {
          required: "ID is required" ,
          minLength: {
            value: 4,
            message: "idは4文字以上を入力してください"
          }
        })}
      />
      {errors.userId && <span role="alert">{errors.userId.message}</span>}
    </>
  );
};

export default InputUserId;
