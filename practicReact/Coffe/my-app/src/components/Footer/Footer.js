import s from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul>
        <li>
          <a href="">
            <i className={s.fa + " fa" + " fa-whatsapp"} aria-hidden="true"></i>{" "}
          </a>
        </li>
        <li>
          <a href="">
            <i className={s.fa + " fa" + " fa-telegram"} aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className={s.fa + " fa" + " fa-vk"} aria-hidden="true"></i>{" "}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
