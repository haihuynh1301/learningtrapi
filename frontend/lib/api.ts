const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:1337";

async function fetchAPI(endpoint: string) {
  const res = await fetch(
    `${API_URL}${endpoint}`,
    { cache: "no-store" }
  );

  const contentType =
    res.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    const text = await res.text();

    throw new Error(
      `Expected JSON but got: ${text.substring(0, 200)}`
    );
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