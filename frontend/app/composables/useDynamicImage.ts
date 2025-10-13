export const useDynamicImage = (imageName: string) => {
  return new URL(`/assets/images/${imageName}`, import.meta.url).href;
};