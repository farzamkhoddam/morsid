import * as yup from "yup";

function GetYapValidationOfPassWord() {
  return yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.");
}

export { GetYapValidationOfPassWord };
