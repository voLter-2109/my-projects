import { Component, Fragment } from "react";

class TestApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: 1,
          salary: 1,
        },
        {
          name: 2,
          salary: 2,
        },
        {
          name: 3,
          salary: 3,
        },
      ],
      yers: 10,
      name: "test",
    };
  }

  onCreateData({ data, yers }) {
    console.log(data);
    const elem = data.map((item) => {
      return (
        <div>
          <span>
            {item.name} : {item.salary * yers}
          </span>
        </div>
      );
    });
    return elem;
  }

  onClickYers = () => {
    let yers = this.state.yers;
    yers++;
    this.setState({ yers: yers });
  };

  render = () => {
    const { data, yers } = this.state;
    return (
      <Fragment>
        <button type="submit" className="btn" onClick={this.onClickYers}>
          Добавить
        </button>
        <span>{yers}</span>
        <this.onCreateData data={data} yers={yers} />
        <this.onCreateData data={data} yers={yers} />
      </Fragment>
    );
  };
}

export default TestApp;
