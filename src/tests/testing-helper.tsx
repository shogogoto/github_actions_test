import React, { FC } from "react";
import { useForm, SubmitHandler, FormProvider} from "react-hook-form";


// function withTestingForm<T>(en: React.ComponentType){
//
// const WithTestingForm: FC = ({ children, ...props }) => {
//       // <form onSubmit={methods.handleSubmit(onSubmit)}>
//     const methods = useForm();
//     const onSubmit = () => {};
//
//     return (
//       <div>
//         <FormProvider {...methods}>
//           <form>
//             {children}
//           </form>
//         </FormProvider>
//       </div>
//     );
// };
//   return WithTestingForm(children);
// };
// export default withTestingForm;
