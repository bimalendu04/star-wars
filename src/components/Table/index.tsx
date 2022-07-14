import { Spin, Table } from "antd";
import { FC,useCallback, useContext } from "react";
import { PlanetContext } from "../../contexts/planets";
import { columns } from "../../utils";
import Footer from "../Footer";

const App: FC = () => {
  const { planets, loading } = useContext(PlanetContext);

  const renderTable = useCallback(
    () => (
      <Table
        rowKey={"name"}
        footer={() => <Footer />}
        pagination={false}
        columns={columns}
        dataSource={planets}
      />
    ),
    [planets]
  );

  if (loading) {
    return <Spin tip="Loading...">{renderTable()}</Spin>;
  } else {
    return renderTable();
  }
};

export default App;
