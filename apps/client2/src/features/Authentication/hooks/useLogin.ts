import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { postLogin } from "@/features/Authentication/endpoints/login";
import { useRouter } from 'vue-router';
export const useLogin = () => {

  const router = useRouter();

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
    const { valid } = await validate();
    if (valid) {
      await postLogin({ email: email.value , password: password.value });
      router.push('/');
    }
  };

  return {
    email,
    emailError,
    password,
    passwordError,
    handleSubmit,
    handleReset,
  };
};
