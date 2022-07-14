import { useCallback } from "react";
import { IUrlConfig } from "../interfaces/common";

interface IusePagination {
  urlConfig: IUrlConfig;
  getPlanetsData: (url: string) => void;
}

const usePagination = ({ getPlanetsData, urlConfig }: IusePagination) => {
  const onNext = useCallback(() => {
    getPlanetsData(urlConfig.next);
  }, [getPlanetsData, urlConfig.next]);

  const onPrev = useCallback(() => {
    getPlanetsData(urlConfig.previous);
  }, [getPlanetsData, urlConfig.previous]);

  return { onNext, onPrev };
};

export default usePagination;
