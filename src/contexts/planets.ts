import React from "react";
import { IPlanet, IUrlConfig } from "../interfaces/common";

export interface IPlanetContext {
  planets: IPlanet[];
  urlConfig: IUrlConfig;
  loading: boolean;
  onNext: () => void;
  onPrev: () => void;
  setPlanets: React.Dispatch<React.SetStateAction<IPlanet[]>>;
}
export const PlanetContext = React.createContext<IPlanetContext>({
  planets: null,
  urlConfig: {
    next: null,
    previous: null,
  },
  loading: false,
  onNext: () => {},
  onPrev: () => {},
  setPlanets: null,
});
