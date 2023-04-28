import SPINNER_ICON from "../../assets/images/Spinner.svg";

const Spinner = () => {
  return (
    <div className="grow">
      <img
        src={SPINNER_ICON}
        alt="Загрузка"
        className="w-40 h-auto mx-auto bg-transparent"
      />
    </div>
  );
};

export default Spinner;
