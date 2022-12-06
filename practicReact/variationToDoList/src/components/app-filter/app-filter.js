import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: [
        { name: "all", label: "Все сотрудники", click: false },
        { name: "rise", label: "На повышение", click: false },
        { name: "moreThen1000", label: "З/П больше 1000$", click: false },
      ],
    };
  }

  resetFilter = (e) => {
    this.setState(({ btn }) => {
      return {
        btn: btn.map((item) => {
          item.click = false;
          if (item.name === e.target.dataset.name) {
            this.props.onFilterSelect(item.name);
            return { ...item, click: !item.click };
          }
          return item;
        }),
      };
    });
  };

  createButton = () => {
    const btn = this.state.btn.map((item) => {
      const className = item.click ? "btn btn-light" : "btn btn-outline-light";

      return (
        <button
          key={item.name}
          type="button"
          data-name={item.name}
          className={className}
          onClick={this.resetFilter}
        >
          {item.label}
        </button>
      );
    });
    return btn;
  };

  render() {
    return (
      <div className="btn-group">
        <this.createButton />
      </div>
    );
  }
}

export default AppFilter;
