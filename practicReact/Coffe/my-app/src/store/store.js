const BUY_COFFEE = "BUY-COFFEE";
const FILTER_COFFEE = "FILTER-COFFEE";
const RESET_COFFEE_CARD = "RESET-COFFEE-CARD";
const DEL_BUY_COFFE = "DEL-BUY-COFFE";

const store = {
  _callSubscriber: null,
  _filter: "",
  _test: [
    {
      name: "Solimo Coffee Beans 2 kg",
      prise: "10.73",
      country: "Brazil",
      best: "true",
      id: "1",
      url: "./img/coffe/presto.png",
    },
    {
      name: "Presto Coffee Beans 1 kg",
      prise: "15.99",
      country: "Kenya",
      best: "true",
      id: "2",
      url: "./img/coffe/AROMISTICO.png",
    },
    {
      name: "AROMISTICO Coffee 1 kg",
      prise: "6.99",
      country: "Columbia",
      best: "true",
      id: "3",
      url: "./img/coffe/solimo.png",
    },
    {
      name: "Presto Coffee Beans 1 kg",
      prise: "15.99",
      country: "Kenya",
      best: "false",
      id: "4",
      url: "./img/coffe/AROMISTICO.png",
    },
    {
      name: "AROMISTICO Coffee 1 kg",
      prise: "6.99",
      country: "Columbia",

      best: "false",
      id: "5",
      url: "./img/coffe/solimo.png",
    },
    {
      name: "Solimo Coffee Beans 2 kg",
      prise: "10.73",
      country: "Brazil",
      best: "false",
      id: "6",
      url: "./img/coffe/presto.png",
    },
    {
      name: "Presto Coffee Beans 1 kg",
      prise: "15.99",
      country: "Kenya",
      best: "false",
      id: "7",
      url: "./img/coffe/AROMISTICO.png",
    },
    {
      name: "AROMISTICO Coffee 1 kg",
      prise: "6.99",
      country: "Columbia",
      best: "false",
      id: "8",
      url: "./img/coffe/solimo.png",
    },
    {
      name: "Presto Coffee Beans 1 kg",
      prise: "15.99",
      country: "Kenya",
      best: "false",
      id: "9",
      url: "./img/coffe/AROMISTICO.png",
    },
    {
      name: "AROMISTICO Coffee 1 kg",
      prise: "6.99",
      country: "Columbia",
      best: "false",
      id: "10",
      url: "./img/coffe/solimo.png",
    },
  ],
  _state: {
    basket: [],
    data: [],
  },

  getstate() {
    this.onShowCardCoffe();
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  onShowCardCoffe() {
    let filterItemCoffe = this._test.filter((item) => {
      if (item.name.toLowerCase().indexOf(this._filter.toLowerCase()) !== -1) {
        return item;
      }
    });
    return (this._state.data = filterItemCoffe);
  },

  dispatch(action) {
    switch (action.type) {
      case RESET_COFFEE_CARD:
        this._filter = "";
        this.onShowCardCoffe();
        return this._callSubscriber(this._state);
      case BUY_COFFEE:
        let coffee = this._state.data.find((item) => {
          return item.id === action.id;
        });
        return this._state.basket.push(coffee);
      case FILTER_COFFEE:
        this._filter = action.text;
        this.onShowCardCoffe();
        return this._callSubscriber(this._state);
      case DEL_BUY_COFFE:
        if (action.id === "0") {
          this._state.basket.shift();
        } else {
          this._state.basket.splice(Number(action.id), 1);
        }
        this.onShowCardCoffe();
        return this._callSubscriber(this._state);
      default:
        return this._callSubscriber(this._state);
    }
  },
};

export const delBuyCoffeeActionCreator = (id) => {
  return {
    type: DEL_BUY_COFFE,
    id: id,
  };
};
export const resetCoffeCardActionCreator = () => {
  return {
    type: RESET_COFFEE_CARD,
  };
};
export const buyCoffeeActionCreator = (id) => {
  return {
    type: BUY_COFFEE,
    id: id,
  };
};
export const filterCoffeActionCreator = (text) => {
  return {
    type: FILTER_COFFEE,
    text: text,
  };
};

export default store;
