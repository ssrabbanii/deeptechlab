import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom scroll function to smoothly scroll to a section with offset
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Validate file size and type
export function validateFile(file: File, maxSizeMB: number = 5, allowedTypes: string[] = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']): string | null {
  if (file.size > maxSizeMB * 1024 * 1024) {
    return `File size should be less than ${maxSizeMB}MB`;
  }
  
  if (!allowedTypes.includes(file.type)) {
    return `Only ${allowedTypes.map(type => type.split('/')[1]).join(', ')} files are allowed`;
  }
  
  return null;
}

// Format date for display
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}
