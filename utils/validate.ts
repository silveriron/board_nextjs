export function validateEmail(value: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(value);
}

export function validatePassword(value: string): boolean {
  return value.length >= 6;
}
