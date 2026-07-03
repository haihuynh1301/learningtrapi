// frontend/lib/image.ts

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:1337";

export function getImageUrl(url?: string | null) {
  if (!url) return null;

  if (url.startsWith("http")) {
    return url;
  }

  return `${API_URL}${url}`;
}