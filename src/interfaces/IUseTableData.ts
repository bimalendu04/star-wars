import React from "react";
import { IPlanet, IUrlConfig } from "./common";

export interface IUseTableData {
  state: {
    planets: IPlanet[];
    error: string;
    loading: boolean;
    urlConfig: IUrlConfig;
  };
  methods: {
    setError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setPlanets: React.Dispatch<React.SetStateAction<IPlanet[]>>;
    setUrlConfig: React.Dispatch<React.SetStateAction<IUrlConfig>>;
    onNext: () => void;
    onPrev: () => void;
  };
}
