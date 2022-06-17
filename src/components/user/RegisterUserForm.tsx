import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import User from "./User";
import UserAPI from "~/api/UserAPI";
import axios from "axios";
import InputUserId from "./InputUserId";
// type Inputs = {
//   id: string,
//   password: string,
//   repassword: string
// }

export type FormInput = {
  userId: string;
  password: string;
  repassword: string;
}

// export type ChildProps = {
//   register: UseFormRegister<FormInput>;
//   errors: DeepMap<FormInput, FieldError>;
// };

const RegisterUserForm: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   getValues,
  //   formState: { errors },
  //   reset
  // } = useForm<FormInput>();

  const methods = useForm<FormInput>();
  // console.log(methods);

  // console.log("1", methods.getFieldState());
  // console.log("2", methods.formState);
  // console.log(typeof(methods.getValues()));

  // const handleSubmit = methods.handleSubmit((data) => {
  //   console.log(data);
  // });

  const onSubmit = (data: FormInput) => {
    axios.get("http://localhost:8000/hello/")
         .then(res => console.log(res.data))
         .catch(error => console.error(error));
  };

        // <InputUserId register={register} errors={errors} />
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputUserId />
        <br />
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" {...methods.register("password", {
            required: "password is required",
            minLength: 4
          })}
        />
        {methods.formState.errors.password && <span role="alert">{methods.formState.errors.password.message}</span>}
        <br />
        <label htmlFor="repassword">パスワード確認</label>
        <input id="repassword" type="password" {...methods.register("repassword", {
          validate: {
            isMatch: (value: string) => value === methods.getValues("password") || "パスワードが不一致です"
          },
          required: "repassword is required",
          minLength: {value: 4, message: "idは4文字以上を入力してください" }
          })}
        />
        {methods.formState.errors.repassword && <span role="alert">{methods.formState.errors.repassword.message}</span>}
        <br />
        <button type="submit" role="submit">ボタン</button>
        <input type="reset" value="リセット" onClick={() => methods.reset()}/>
      </form>
    </FormProvider>
  );

};

export default RegisterUserForm;
