export function cn(...inputs: ClassValue[]) {
  return inputs
    .map(i => i)
    .filter(Boolean)
    .join(' ');
}

type ClassValue = string | number | boolean | null | undefined | ClassValue[];
