import * as Yup from "yup";
const phoneRegExp = /^[0-9]{10}$/;

const validateEmail = (email) => {
  return Yup.string().email().isValidSync(email);
};

const validatePhone = (phone) => {
  return Yup.string()
    .matches(phoneRegExp)
    .isValidSync(phone);
};

export const loginValidateSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("Email / Phone is required")
    .test("emailOrPhone", "Email / Phone is invalid", (value) => {
      if (/^\d$/.test(value[0])) {
        return validatePhone(value);
      } else {
        return validateEmail(value);
      }
    }),
  password: Yup.string()
    .required("This field is required")
    // .min(8, "Pasword must be 8 or more characters")
    // .matches(
    //   /(?=.*[a-z])(?=.*[A-Z])\w+/,
    //   "Password ahould contain at least one uppercase and lowercase character"
    // )
    // .matches(/\d/, "Password should contain at least one number")
    // .matches(
    //   /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
    //   "Password should contain at least one special character"
    // ),
});
