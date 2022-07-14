import {FC} from 'react';
import { Alert } from "antd";
import "./App.scss";
import LayoutWrapper from "./components/Layout";
import Table from "./components/Table";
import { PlanetContext } from "./contexts/planets";
import useTableData from "./hooks/useTableData";

const App: FC = () => {
  const { state, methods } = useTableData();
  const { planets, urlConfig, loading, error } = state;
  const { onNext, onPrev, setPlanets } = methods;

  return (
    <LayoutWrapper title={"Planets"}>
      <PlanetContext.Provider
        value={{ planets, urlConfig, loading, onNext, onPrev, setPlanets }}
      >
        <>
          {error ? <Alert message={error} type="error" /> : null}
          <Table />
        </>
      </PlanetContext.Provider>
    </LayoutWrapper>
  );
}

export default App;
