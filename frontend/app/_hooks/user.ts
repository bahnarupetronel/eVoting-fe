import { userDetailsEdit } from "@/_interfaces/userDetailsEdit.model";
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

const useGetAddress = () => {
  return useQuery({
    queryKey: ["user-address"],
    queryFn: () => UserService.getAddress(),
    retry: 0,
  });
};

const useGetIsUserAllowedToVote = () => {
  return useQuery({
    queryKey: ["user-allowed-to-vote"],
    queryFn: () => UserService.getIsUserAllowedToVote(),
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

const usePostUserDetails = () => {
  return useMutation({
    mutationFn: (user: userDetailsEdit) => {
      return UserService.postUserDetails(user);
    },
  });
};

export {
  useGetUserDetails,
  useIsConfirmEmailSent,
  useSendValidationEmail,
  useSendEmailToken,
  usePostUserDetails,
  useGetAddress,
  useGetIsUserAllowedToVote,
};
