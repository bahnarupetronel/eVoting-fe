import UserService from "@/_services/user/UserService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetUserDetails = (email: string) => {
  return useQuery({
    queryKey: ["user", email],
    queryFn: () => UserService.getUserDetails(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
  });
};

const useIsConfirmEmailSent = (email: string) => {
  return useQuery({
    queryKey: ["confirm-email", email],
    queryFn: () => UserService.isConfirmEmailSent(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
  });
};

const useSendValidationEmail = () => {
  return useMutation({
    mutationFn: (token: string) => {
      return UserService.validateEmail(token);
    },
  });
};

const useSendEmailToken = () => {
  return useMutation({
    mutationFn: (token: string) => {
      return UserService.sendEmailToken(token);
    },
  });
};

export {
  useGetUserDetails,
  useIsConfirmEmailSent,
  useSendValidationEmail,
  useSendEmailToken,
};
