import React, { useState, useEffect } from "react";
import { Input, Row, Col, DatePicker, InputNumber, Button, Table } from "antd";
import moment from "moment";
import MyLabel from "./MyLabel";
import { ColumnsType } from "antd/lib/table";

interface ICity {
  name: string;
  population: number | undefined;
  createdAt: moment.Moment | null;
}

function App() {
  const [newCity, setNewCity] = useState<ICity>({
    createdAt: moment(),
    name: "",
    population: 0,
  });
  const [cities, setCities] = useState<ICity[]>([]);

  // useEffect faz o papel do componentDidMount e do componentDidUpdate

  // Isso será disparado toda vez que a propriedade no array de depenciar mudar "newCity.name"
  // useEffect(() => {
  //   window.alert("nome mudou");
  // }, [newCity.name]);

  // Isso será disparado quando o componente terminar de carregar
  //
  // useEffect(() => {
  //   window.alert("carregou");
  // }, []);

  function setName(valor: string) {
    setNewCity((estadoAnterior) => ({
      ...estadoAnterior,
      name: valor,
    }));
  }
  function setPopulation(quantity: number | undefined) {
    setNewCity((estadoAnterior) => ({
      ...estadoAnterior,
      population: quantity,
    }));
  }
  function setDate(date: moment.Moment | null) {
    setNewCity((estadoAnterior) => ({
      ...estadoAnterior,
      createdAt: date,
    }));
  }
  function addNewChildren() {
    setCities((estadoAnterior) => [...estadoAnterior, newCity]);

    setNewCity({
      createdAt: moment(),
      name: "",
      population: 0,
    });
  }
  const columns: ColumnsType<ICity> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: string, row: ICity) => row.createdAt?.format(dateFormat),
    },
  ];

  const totalPopulation = cities.reduce(
    (acc, currentObj) => acc + (currentObj?.population ?? 0),
    0
  );

  const dateFormat = "DD/MM/YYYY";
  return (
    <>
      <MyLabel>Minha Aplicação</MyLabel>
      <MyLabel>Total Population: {totalPopulation}</MyLabel>
      <Row>
        <Col span={4}>
          <Input
            value={newCity.name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </Col>
        <Col span={2}>
          <InputNumber value={newCity.population} onChange={setPopulation} />
        </Col>
        <Col span={5}>
          <DatePicker
            format={dateFormat}
            defaultValue={moment(newCity.createdAt, dateFormat)}
            onChange={setDate}
          />
          <Button type="primary" onClick={addNewChildren}>
            Add
          </Button>
        </Col>
      </Row>

      <Row>
        <Col span={18}>
          {/* <table>
            <tr>
              <th>Name</th>
              <th>Population</th>
              <th>Created At</th>
            </tr>
            <tbody>
              {cities.map((city) => (
                <tr>
                  <td>{city.name}</td>
                  <td>{city.population}</td>
                  <td>{city.createdAt?.format(dateFormat)}</td>
                </tr>
              ))}
            </tbody>
          </table> */}

          <Table
            pagination={{
              pageSize: 3,
            }}
            // dataSource={cities.filter((c) => c.name.startsWith("a"))}
            dataSource={cities}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
}

export default App;
