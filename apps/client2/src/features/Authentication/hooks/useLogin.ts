import { useForm, useField } from "vee-validate";
import { useMutation } from "vue-query";
import { object, string } from "yup";
import { postLogin } from "@/features/Authentication/endpoints/login";
import { useRouter } from "vue-router";
export const useLogin = () => {
  const router = useRouter();

  const { isLoading, isError, error, mutateAsync, isSuccess } = useMutation<
    any,
    { statusCode: number; message: string; error: string },
    { email: string; password: string }
  >(async (data) => {
    return postLogin(data);
  });

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

  const { value: email, errorMessage: emailError } = useField<string>("email", {
    validateOnValueUpdate: false,
  });
  const { value: password, errorMessage: passwordError } = useField<string>(
    "password",
    { validateOnValueUpdate: false }
  );

  const handleSubmit = async () => {
    const { valid } = await validate();
    if (valid) {
      await mutateAsync({ email: email.value, password: password.value });
      if (isSuccess) {
        router.push("/");
      }
    }
  };

  const errorMessage = computed(() => error.value?.message);

  return {
    email,
    emailError,
    password,
    passwordError,
    handleSubmit,
    handleReset,
    errorMessage,
    isLoading
  };
};
