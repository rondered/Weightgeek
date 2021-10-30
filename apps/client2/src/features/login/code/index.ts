import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
const useLogin = () => {
  const fieldState = reactive({
    email: "",
    password: "",
  });
  const fieldRules = {
    email: {
      required: helpers.withMessage("Email is required", required),
      email,
    },
    password: {
      required: helpers.withMessage("Password is required", required),
      minLength: minLength(6),
    },
  };

  const v = useVuelidate(fieldRules, fieldState);

  const submitForm = async () => {
    await v.value.$validate();
  };

  return { fieldState, v, submitForm };
};

export default useLogin;
