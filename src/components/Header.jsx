import PropTypes from "prop-types";
import "../index.css";

const Header = ({bgColor, text, textColor}) => {

const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
}

  return (
    <div className="header" style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
