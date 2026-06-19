const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:1337";

async function fetchAPI(endpoint: string) {
  const res = await fetch(
    `${API_URL}${endpoint}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}

export async function getHomepage() {
  return fetchAPI("/api/homepage-full");
}

export async function getAboutPage() {
  return fetchAPI("/api/about-full");
}

export async function getGlobal() {
  return fetchAPI("/api/global-full");
}