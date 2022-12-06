import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdataSearch = (e) => {
    const termValue = e.target.value;
    this.props.onUpdateSearch(termValue.toLowerCase());
    this.setState({
      term: this.props.term,
    });
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.onUpdataSearch}
        value={this.props.term}
      />
    );
  }
}

export default SearchPanel;
