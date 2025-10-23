export class AppError extends Error {
  constructor(message: string, public code?: number) {
    super(message);
  }
}

export function handleError(err: unknown): string {
  if (err instanceof AppError) return `Custom Error: ${err.message}`;
  if (err instanceof Error) return `Error: ${err.message}`;
  return "Unknown error occurred";
}
