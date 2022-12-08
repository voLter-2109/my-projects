import { Link } from "react-router-dom";

import s from "./card.module.scss";

const CreateCardItem = (props) => {
  const { name, prise, country, best, url } = props;
  return (
    <div className={s.cardsCard}>
      <img src={url} alt="Coffe" />
      <p>{name}</p>
      <p>{country}</p>
      <p>{prise}</p>
      <Link key={props.id} to={`/${name}`} {...props}>
        {" "}
        Просмотр{" "}
      </Link>
    </div>
  );
};

export default CreateCardItem;
