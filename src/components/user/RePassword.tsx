import React from "react";
import {useForm} from "react-hook-form";
import User from "./User"


type Inputs = {
  id: string,
  password: string,
  repassword: string
}

export default function RePasswordForm() {
  const { register, handleSubmit, watch, formState: errors} = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);
  //
  // console.log(watch("id"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">ID</label>
      <input type="text" name="id" />

      <label htmlFor="password">password</label>
      <input id="password" type="password" name="password" />
      <label htmlFor="repassword">repassword</label>
      <input id="repassword" type="password" name="repassword" />
      <button type="submit">ボタン</button>
      <input type="reset" value="リセット" />
    </form>
  );

};

