// import React, { useState, useEffect } from "react";
// import { useDebouncedCallback } from "use-debounce";
// import EyeOffIcon from "../assets/svg/eye-off.svg";
// import EyeIcon from "../assets/svg/eye.svg";

// export default function InputField({
//   label,
//   type = "text",
//   name,
//   errorMessage,
//   placeholder,
//   prefixIcon,
//   validateExpression,
//   onValidationChange,
//   onChange,
//   defaultValue,
//   disabled,
//   animation,
//   value,
//   optional = false,
//   customizedValidationOn = false,
// }) {
//   const [intermediateType, setIntermediateType] = useState(type);
//   const [errorState, setErrorState] = useState(false);

//   useEffect(() => {
//     if (onValidationChange !== undefined) {
//       onValidationChange(!errorState);
//     }
//   }, [errorState]);

//   const validationFunc = useDebouncedCallback((value) => {
//     if (validateExpression !== undefined) {
//       if (customizedValidationOn) {
//         const vResult = validateExpression(value);
//         changeErrorState(vResult);
//       } else {
//         const vResult = validateExpression.test(value);
//         changeErrorState(vResult);
//       }
//     }
//     //! Missing function validation for password
//   }, 700);

//   const changeErrorState = (isError) => {
//     setErrorState(!isError);
//   };

//   const onInputChange = (e) => {
//     if (onChange !== undefined) {
//       onChange(e);
//     }
//     validationFunc(e.target.value);
//   };

//   const PrefixIcon = () => {
//     return prefixIcon;
//   };

//   return (
//     <div className={`mt-4 ${animation}`}>
//       <label
//         htmlFor="email"
//         className={`block text-[13px] font-semibold ${
//           errorState ? "text-error" : "text-gray-600"
//         }`}
//       >
//         {label}
//         {optional ? (
//           <span className="text-[11px] font-semibold ml-1 text-main">
//             (Optional)
//           </span>
//         ) : null}
//       </label>
//       <div className="mt-1 relative rounded-md shadow-sm">
//         <input
//           disabled={disabled}
//           type={intermediateType}
//           name={name}
//           id={name}
//           // pr-10 removed
//           className={`h-[42px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[13px] ${
//             errorState
//               ? "border-error text-error focus:ring-error focus:border-error"
//               : "border-lightGrey text-black focus:ring-main focus:border-main"
//           } ${
//             disabled
//               ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
//               : ""
//           }`}
//           placeholder={placeholder}
//           aria-invalid="true"
//           aria-describedby="email-error"
//           value={value}
//           onChange={onInputChange}
//         />
//         {prefixIcon !== undefined ? (
//           <div className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 cursor-pointer text-gray-400">
//             <PrefixIcon />
//           </div>
//         ) : null}

//         {type === "password" && (
//           <div
//             onClick={() => {
//               setIntermediateType((prev) =>
//                 prev === "text" ? "password" : "text"
//               );
//             }}
//             className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 cursor-pointer text-gray-400"
//           >
//             {intermediateType === "text" ? <EyeIcon /> : <EyeOffIcon />}
//           </div>
//         )}
//       </div>
//       {errorMessage && errorState && (
//         <p
//           className={`mt-2 text-xs ${errorState ? "text-error" : "text-black"}`}
//         >
//           {errorMessage}
//         </p>
//       )}
//     </div>
//   );
// }
