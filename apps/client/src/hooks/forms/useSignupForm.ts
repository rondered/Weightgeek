import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().min(6, { message: "Must be 6 or more characters" }),
});

export const useSignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });

  return { handleSubmit, register, errors };
};
