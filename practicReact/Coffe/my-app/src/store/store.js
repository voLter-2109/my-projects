const BUY_COFFEE = "BUY-COFFEE";

const store = {
  _callSubscriber: null,
  _basket: [],
  _state: {
    data: [
      {
        name: "Solimo Coffee Beans 2 kg",
        prise: 10.73,
        country: "Brazil",
        best: "true",
        id: 1,
        url: "./img/coffe/presto.png",
      },
      {
        name: "Presto Coffee Beans 1 kg",
        prise: 15.99,
        country: "Kenya",
        best: "true",
        id: 2,
        url: "./img/coffe/AROMISTICO.png",
      },
      {
        name: "AROMISTICO Coffee 1 kg",
        prise: 6.99,
        country: "Columbia",
        best: "true",
        id: 3,
        url: "./img/coffe/solimo.png",
      },
      {
        name: "Presto Coffee Beans 1 kg",
        prise: 15.99,
        country: "Kenya",
        best: "true",
        id: 4,
        url: "./img/coffe/AROMISTICO.png",
      },
      {
        name: "AROMISTICO Coffee 1 kg",
        prise: 6.99,
        country: "Columbia",

        best: "true",
        id: 5,
        url: "./img/coffe/solimo.png",
      },
    ],
  },

  getstate() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case BUY_COFFEE:
        let coffee = this._state.data.find((item) => {
         return  item.id === action.id;
        });
        this._basket.push(coffee);
        return this._callSubscriber(this._state);
      default:
        return this._callSubscriber(this._state);
    }
  },
};

export const buyCoffeeActionCreator = (id) => {
  return {
    type: BUY_COFFEE,
    id: id,
  };
};

export default store;
