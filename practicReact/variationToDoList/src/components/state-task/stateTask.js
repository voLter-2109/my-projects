// import "./stateTask.css";
import { Component } from "react";
import React from "react";

class StateApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.counter,
      min: -3,
      max: 3,
    };
  }

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  plusNumber = () => {
    if (this.state.number > this.state.max - 1) {
      return;
    }
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };

  minusNumber = () => {
    if (this.state.number < this.state.min + 1) {
      return;
    }
    this.setState((state) => ({
      number: state.number - 1,
    }));
  };

  randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return this.setState((state) => ({
      number: (state.number = Math.floor(rand)),
    }));
  };

  reserState = () => {
    this.setState((state) => ({
      number: (state.number = this.props.counter),
    }));
  };

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.number}</div>
        <div className="controls">
          <button onClick={this.plusNumber}>INC+</button>
          <button onClick={this.minusNumber}>DEC-</button>
          <button onClick={() => this.randomInteger(-3, 3)}>RND</button>
          <button onClick={this.reserState}>RESET</button>
        </div>
      </div>
    );
  }
}

export default StateApp;

// 1) Начальное значение счетчика должно передаваться через props OK
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит OK
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
