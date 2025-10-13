export const usePbClient = () => {
  const { $pb } = useNuxtApp();
  return {
    pb: $pb,
  };
};
