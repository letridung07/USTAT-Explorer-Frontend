export async function customFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `http://127.0.0.1:8000${url}`,
    options
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}