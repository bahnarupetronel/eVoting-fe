import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { userRegister } from "@/_interfaces/userRegister.model";
import { UserLogin } from "@/_interfaces/userLogin.model";
import AuthService from "../_services/auth/AuthService";

const useLogin = () => {
  return useMutation({
    mutationFn: (user: UserLogin) => {
      return AuthService.loginUser(user);
    },
  });
};

export { useLogin };
