import { Link } from "react-router-dom";

const DialogName = (props) => {
  const onUpdateDialogId = (e) => {
    // e.preventDefault();
    let eT = e.target.parentNode.childNodes;
    eT.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    const id = e.currentTarget.getAttribute("data-id");
    props.updateDialogId(id);
  };

  const dialog = props.dialogs.map((item) => {
    return (
      <Link
        data-id={item.id}
        key={item.id}
        to={`/dialogs/${item.id}`}
        onClick={onUpdateDialogId}
      >
        {item.name}
      </Link>
    );
  });
  return dialog;
};

export default DialogName;
