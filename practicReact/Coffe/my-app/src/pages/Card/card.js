import BtnModalWindow from "./BtnModalWindow";
import s from "./card.module.scss";

const CreateCardItem = (props) => {
  const onClickBuy = (e) => {
    let id = e.target.parentNode.getAttribute("data-id");

    props.onPurchase(id);
  };
  const { id, name, prise, country, url } = props.card;
  return (
    <div data-id={id} className={s.cardsCard}>
      <img src={url} alt="Coffe" />
      <p>{name}</p>
      <p>{country}</p>
      <p>{prise}</p>
      <BtnModalWindow data={props.card} onPurchase={props.onPurchase} />
      <button onClick={onClickBuy}>Buy</button>
    </div>
  );
};

export default CreateCardItem;
