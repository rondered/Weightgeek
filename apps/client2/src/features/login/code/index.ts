import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
const useLogin = () => {
  const fieldState = reactive({
    email: "",
    password: "",
  });
  const fieldRules = {
    email: { required, email },
    password: { required },
  };

  const v = useVuelidate(fieldRules, fieldState);

  const submitForm = async () => {
    await v.value.$validate();
  };

  return { fieldState, v, submitForm };
};

export default useLogin;
