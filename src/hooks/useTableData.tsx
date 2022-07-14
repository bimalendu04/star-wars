import {  useEffect, useState } from "react";
import { IPlanet, IUrlConfig } from "../interfaces/common";
import { IUseTableData } from "../interfaces/IUseTableData";
import useApi from "./useApi";
import usePagination from "./usePagination";

const useTableData: () => IUseTableData = () => {
  const [planets, setPlanets] = useState<IPlanet[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [urlConfig, setUrlConfig] = useState<IUrlConfig>({
    next: null,
    previous: null,
  });

  
  const { getPlanetsData } = useApi({
    setPlanets,
    setUrlConfig,
    setLoading,
    setError,
  });

  const { onNext, onPrev } = usePagination({ getPlanetsData, urlConfig });

  useEffect(() => {
    getPlanetsData();
  }, [getPlanetsData]);

  return {
    state: {
      planets,
      error,
      loading,
      urlConfig,
    },
    methods: {
      setError,
      setLoading,
      setPlanets,
      setUrlConfig,
      onNext,
      onPrev,
    },
  };
};

export default useTableData;
