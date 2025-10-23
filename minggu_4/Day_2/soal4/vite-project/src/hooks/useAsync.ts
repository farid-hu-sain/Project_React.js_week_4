import { useState, useEffect } from "react";

type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useAsync<T>(asyncFn: () => Promise<T>, deps: any[] = []): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;
    setState({ data: null, loading: true, error: null });

    asyncFn()
      .then((data) => mounted && setState({ data, loading: false, error: null }))
      .catch((err) => mounted && setState({ data: null, loading: false, error: err.message }));

    return () => {
      mounted = false;
    };
  }, deps);

  return state;
}
