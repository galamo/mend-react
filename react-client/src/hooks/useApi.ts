import { useEffect, useState } from "react";
export function useAsyncApi<T>(fetchFunction: any, initialValue: T) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ errorMessage: string }>({
    errorMessage: "",
  });
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      try {
        console.log("this is useApi");
        setIsLoading(true);
        const result = await fetchFunction();
        setData(result);
      } catch (error: any) {
        setError({ errorMessage: error.message || "Default Error" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      console.log("clean up useAsyncApi ");
    };
  }, [fetchFunction]);

  return { isLoading, data, error };
}
