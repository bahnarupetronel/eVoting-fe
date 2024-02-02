export const isFormCompleted = (candidate) => {
  for (const index in candidate?.education)
    if (
      !candidate?.education[index].promotionYear ||
      !candidate?.education[index].faculty
    )
      return false;

  for (const key in candidate) {
    if (!candidate[key]) return false;
  }
  return true;
};
