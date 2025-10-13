export const capitalizeFirstLetter = (str: string) => {
  return str.trim().charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Extracts all src attribute values from <img> tags in an HTML string.
 *
 * @param html - The input HTML string.
 * @returns An array of src values found in <img> tags.
 */
export function extractImageSrcs(html: string): string[] {
  const srcs: string[] = [];
  const imgTagRegex = /<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi;

  let match;
  while ((match = imgTagRegex.exec(html)) !== null) {
    srcs.push(match[1] as string);
  }

  return srcs;
}

/**
 * Converts a Base64 data URL string (e.g. from <img src="...">) to a File object.
 *
 * @param base64Data - The base64 string (including the data URL prefix).
 * @param fileName - The desired name for the output file.
 * @returns A File object representing the image.
 */
export function base64ToFile(base64Data: string, fileName: string): File {
  // Example input: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA..."
  const arr = base64Data.split(",");
  const mimeMatch = arr[0]!.match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";
  const bstr = atob(arr[1]!);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

/**
 * Finds all <img> tags in the given HTML string and replaces each `src` value individually.
 *
 * @param html - The input HTML string.
 * @param replacer - A function that receives (oldSrc, index) and returns a new src value.
 * @returns The updated HTML string.
 */
export function replaceAllImageSrcs(
  html: string,
  replacer: (oldSrc: string, index: number) => string
): string {
  let imgIndex = 0;

  return html.replace(
    /<img\b([^>]*?)\bsrc=["']([^"']+)["']([^>]*)>/gi,
    (match, before, src, after) => {
      const newSrc = replacer(src, imgIndex++);
      return `<img${before}src="${newSrc}"${after}>`;
    }
  );
}

/**
 * Fetch an image from a given URL and convert it to a Base64-encoded string.
 * @param imageUrl - The URL of the image to fetch.
 * @returns A promise that resolves to the Base64 string representation of the image.
 */

export async function imageUrlToBase64Client(
  imageUrl: string
): Promise<string> {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

