import { useState, useCallback, useRef, useEffect } from "react";

export type AsyncStatus = "idle" | "loading" | "success" | "error";

export default function useAsync<TParams extends any[], TResult>(
  asyncFn: (...args: TParams) => Promise<TResult>,
  options?: { immediate?: boolean }
) {
  const [status, setStatus] = useState<AsyncStatus>("idle");
  const [data, setData] = useState<TResult | null>(null);
  const [error, setError] = useState<unknown>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const execute = useCallback(
    async (...params: TParams) => {
      setStatus("loading");
      setError(null);
      try {
        const result = await asyncFn(...params);
        if (!mountedRef.current) return;
        setData(result);
        setStatus("success");
        return result;
      } catch (err) {
        if (!mountedRef.current) return;
        setError(err);
        setStatus("error");
        throw err;
      }
    },
    [asyncFn]
  );

  useEffect(() => {
    if (options?.immediate) {
      // @ts-expect-error intentionally generic
      execute();
    }
  }, [execute, options]);

  return { execute, status, data, error } as const;
}
