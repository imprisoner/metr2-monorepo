import imageCompression, { type Options } from "browser-image-compression";

const MAX_FILE_SIZE_MB = 0.04;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      resizeImage: async (imageFile: File, options: Options = {}) => {
        const imageSize = imageFile.size / 1024 / 1024;
        const hasExceededLimit = imageSize > MAX_FILE_SIZE_MB;

        const result = hasExceededLimit
          ? await imageCompression(imageFile, { ...options, maxWidthOrHeight: 1024, useWebWorker: true })
          : imageFile;
        return result;
      },
    },
  };
});

