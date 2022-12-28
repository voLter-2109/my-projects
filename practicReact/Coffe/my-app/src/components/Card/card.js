import BtnModalWindow from "./BtnModalWindow";
import s from "./card.module.scss";



const CreateCardItem = (props) => {
  const { id, name, prise, url } = props.card;

  const onClickBuy = (e) => {
    let id = e.target.parentNode.getAttribute("data-id");
    props.onPurchase(id);
  };

  return (
    <div data-id={id} className={s.cardsCard}>
      <div className={s.cardImg}>
        <BtnModalWindow data={props.card} onPurchase={props.onPurchase} />
        <img src={url} alt="Coffe" />
      </div>
      <div className={s.cardText}>
        <span className={s.name}>{name}</span>
        <div className={s.price}>
          <span>{prise + "$"}</span>
          <button onClick={onClickBuy}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCardItem;
