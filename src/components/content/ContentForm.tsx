import React, { FC } from "react";
import CaptionInput from "./CaptionInput";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton"
import {
  useForm,
  SubmitHandler,
  FormProvider
} from "react-hook-form";
// import ContentApi from "api/ContentApi"


import {
  ContentFormInput
  , Caption
  , Description
  , Content
} from "types/Content";


const ContentForm : FC = () => {
  const methods = useForm<ContentFormInput>();

  const onSubmit = (data: ContentFormInput) => {
    // console.log(data.caption);
    // console.log(data.description);
    // // console.log(xyz);
    // console.log(Content.create(
    //     data.caption
    //   , data.description
    // ));
    // const x = ContentApi.get();
    //
    // console.log("aaa", x);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CaptionInput />
        <DescriptionInput />
        <SubmitButton />
      </form>
    </FormProvider>
  );
};

export default ContentForm;
