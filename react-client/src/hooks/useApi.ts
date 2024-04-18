import { useEffect, useState } from "react";
export function useAsyncApi<T>(
  fetchFunction: any,
  initialValue: T,
  dep: string
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ errorMessage: string }>({
    errorMessage: "",
  });
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    let isActive = true;
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetchFunction(dep);
        if (isActive) {
          setData(result);
        }
      } catch (error: any) {
        setError({ errorMessage: error.message || "Default Error" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      isActive = false;
      console.log("clean up useAsyncApi ");
    };
  }, [fetchFunction, dep]);

  return { isLoading, data, error };
}
