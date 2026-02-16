import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// cn util
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
