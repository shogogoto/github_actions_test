import React, { FC } from "react";

import { useFormContext } from "react-hook-form";
// import { ContentFormInput } from "types/Content";
//
// const CaptionInput: FC = ()=> {
//   const { register } = useFormContext<ContentFormInput>();
//   return (
//     <input
//       id="caption-id"
//     />
//   );
// };
//
//
// export default CaptionInput;
const DescriptionInput: FC = () => {
  const { register } = useFormContext<ContentFormInput>();

  return (
    <textarea
      id="description-id"
      {...register("description")}
    />
  )

}

export default DescriptionInput;


// import React, { FC } from "react";

