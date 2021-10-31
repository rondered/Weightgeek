import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
export const useLogin = () => {
  const validationSchema = object({
    email: string().email("Invalid address").required("Email Required"),
    password: string()
      .min(6, "More than 6 characters")
      .required("Password Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const { validate, handleReset } = useForm({
    validationSchema,
    initialValues,
  });

  const { value: email, errorMessage: emailError } = useField("email", {
    validateOnValueUpdate: false,
  });
  const { value: password, errorMessage: passwordError } = useField(
    "password",
    { validateOnValueUpdate: false }
  );

  const handleSubmit = async () => {
    const result = await validate();
    console.log(result);
  }

  return {
    email,
    emailError,
    password,
    passwordError,
    handleSubmit,
    handleReset,
  };
};
