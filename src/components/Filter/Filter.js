import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ filter, getFilterContact }) => (
  <>
    <input
      className={style.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={getFilterContact}
      placeholder="Enter name to find"
    />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string,
  getFilterContact: PropTypes.func,
};

export default Filter;
