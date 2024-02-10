import { useMutation } from "@tanstack/react-query";
import { UserLogin } from "@/_interfaces/userLogin.model";
import AuthService from "../_services/auth/AuthService";

const useLogin = () => {
  return useMutation({
    mutationFn: (user: UserLogin) => {
      return AuthService.loginUser(user);
    },
  });
};

const useRegisterUser = () => {
  return useMutation({
    mutationFn: (user) => {
      return AuthService.registerUser(user);
    },
  });
};

const useLogoutUser = () => {
  return useMutation({
    mutationFn: () => {
      return AuthService.logoutUser();
    },
  });
};

const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email: string) => {
      return AuthService.forgotPassword(email);
    },
  });
};

const useChangePassword = (token: string) => {
  return useMutation({
    mutationFn: (password: string) => {
      return AuthService.changePassword(password, token);
    },
  });
};

export {
  useLogin,
  useForgotPassword,
  useChangePassword,
  useRegisterUser,
  useLogoutUser,
};
