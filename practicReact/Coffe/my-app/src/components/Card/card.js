import BtnModalWindow from "./BtnModalWindow";
import s from "./card.module.scss";

const CreateCardItem = (props) => {
  const { id, name, prise, url } = props.card;

  // const onClickBuy = () => {
  //   props.onPurchase(id);
  // };

  return (
    <div className={s.cardsCard}>
      <div className={s.cardImg}>
        <BtnModalWindow data={props.card} onPurchase={props.onPurchase} />
        <img src={url} alt="Coffe" />
      </div>
      <div className={s.cardText}>
        <span className={s.name}>{name}</span>
        <div className={s.price}>
          <span>{prise + "$"}</span>
          <button
            onClick={() => {
              props.onPurchase(id);
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCardItem;
