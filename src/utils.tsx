import dayjs from "dayjs";

export interface IColumn {
  title: string;
  dataIndex: string;
  key?: string;
  render?: (created: string) => JSX.Element;
}

export const columns : IColumn[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Climate",
    dataIndex: "climate",
  },
  {
    title: "Population",
    dataIndex: "population",
  },
  {
    title: "Created",
    dataIndex: "created",
    render: (created: string) => <span>{dayjs(created).format("DD/MM/YYYY")}</span>,
  },
];
