// a tiny helper that simulates network delay
export function delay(ms = 400) {
  return new Promise((res) => setTimeout(res, ms));
}
