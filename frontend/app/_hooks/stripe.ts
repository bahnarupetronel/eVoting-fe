import StripeService from "@/_services/stripe/StripeService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useCreateVerificationSession = () => {
  return useMutation({
    mutationFn: (email: string) => {
      return StripeService.createVerificationSession(email);
    },
  });
};

const useGetVerificationSession = (email: string) => {
  return useQuery({
    queryKey: ["stripe-session", email],
    queryFn: () => StripeService.getVerificationSession(),
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
  });
};

export { useCreateVerificationSession, useGetVerificationSession };
