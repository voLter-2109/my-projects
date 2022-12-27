import BtnModalWindow from "./BtnModalWindow";
import s from "./card.module.scss";

const CreateCardItem = (props) => {
  const { id, name, prise, country, url } = props.card;

  const onClickBuy = (e) => {
    let id = e.target.parentNode.getAttribute("data-id");
    props.onPurchase(id);
  };

  return (
    <div data-id={id} className={s.cardsCard}>
      <img src={url} alt="Coffe" />
      <div>
        <p className={s.name}>{name}</p>
        <p>{"Country: " + country}</p>
        <div className={s.price}>
          <span>{prise + "$"}</span>
          <button onClick={onClickBuy}>Buy</button>
        </div>
        <BtnModalWindow data={props.card} onPurchase={props.onPurchase} />
      </div>
    </div>
  );
};

export default CreateCardItem;
