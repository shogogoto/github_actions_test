import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import { ContentFormInput } from "~/types/Content";
const aaa = "aaa";


const CaptionInput: FC = ()=> {
  const { register } = useFormContext<ContentFormInput>();
  return (
    <input
      id="caption-id"
      placeholder="caption"
      {...register("caption")}
    />
  );
};


export default CaptionInput;
