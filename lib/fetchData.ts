export async function fetchData(locale: string) {
  const response = await fetch(`/api/getData?locale=${locale}`);
  const data = await response.json();
  return data;
}