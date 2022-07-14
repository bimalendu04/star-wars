import { Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { PlanetContext } from "../../contexts/planets";
import { FC, useContext } from "react";

const Footer: FC = () => {
  const { onNext, onPrev, urlConfig, loading } = useContext(PlanetContext);

  return (
    <Space>
      <Button
        onClick={onPrev}
        disabled={loading || !Boolean(urlConfig.previous)}
        type="primary"
        shape="round"
        icon={<LeftOutlined />}
        size={"large"}
      />
      <Button
        onClick={onNext}
        disabled={loading || !Boolean(urlConfig.next)}
        type="primary"
        shape="round"
        icon={<RightOutlined />}
        size={"large"}
      />
    </Space>
  );
};
export default Footer;
