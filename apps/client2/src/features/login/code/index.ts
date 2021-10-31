import useVuelidate from "@vuelidate/core";
// import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
const useLogin = () => {
  const validationSchema = object({
    email: string().email("Invalid address").required("Email Required"),
    password: string()
      .min(6, `More than 6 characters`)
      .required("Password Required"),
  });

  const { submitForm, handleReset } = useForm({ validationSchema });

  const { value: email, errorMessage: emailError } = useField("email", {
    validateOnValueUpdate: false,
  });
  const { value: password, errorMessage: passwordError } = useField(
    "password",
    { validateOnValueUpdate: false }
  );

  return { email, emailError, password, passwordError, submitForm, handleReset };
};

export default useLogin;
