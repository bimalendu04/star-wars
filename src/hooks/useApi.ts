import { useCallback } from "react";
import { IPlanet, IUrlConfig } from "../interfaces/common";
import get from "../services/get";

interface IusePagination {
  setError: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPlanets: React.Dispatch<React.SetStateAction<IPlanet[]>>;
  setUrlConfig: React.Dispatch<React.SetStateAction<IUrlConfig>>;
}

const useApi = ({
  setLoading,
  setPlanets,
  setUrlConfig,
  setError,
}: IusePagination) => {
  const errorHandler = useCallback(
    (error: string) => {
      setError(error);
      setLoading(false);
    },
    [setError, setLoading]
  );

  const getPlanetsData = useCallback(
    async (url?: string | null) => {
      const defaultURL: string = "https://swapi.dev/api/planets";
      setLoading(true);
      const data = await get(url || defaultURL);
      if (data.errorMessage) {
        errorHandler(data.errorMessage);
        return;
      }
      setPlanets(data.results);
      setUrlConfig({ next: data.next, previous: data.previous });
      setLoading(false);
      errorHandler(null);
    },
    [errorHandler, setLoading, setPlanets, setUrlConfig]
  );

  return { getPlanetsData };
};

export default useApi;
