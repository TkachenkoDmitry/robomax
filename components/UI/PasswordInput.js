import React from "react";
import { connect } from "react-redux";

import { showPass } from "../../../store/actions";
import classes from "./Input.module.css";
import IconShow from "../Icons/IconShow";
import "../../../assets/fonts/Hind/Hind-Regular.ttf";

const Input = props => {
  const {
    input,
    label,
    showPass,
    meta: { touched, error, warning }
  } = props;

  const showPassword = e => {
    e.preventDefault();
    showPass();
  };
  const inputClasses = [classes.Input];
  if (input.value) {
    inputClasses.push(classes.HasValue);
  }
  if (warning && touched) {
    inputClasses.push(classes.Invalid);
  }
  const inputType = props.showPassword ? "text" : "password";

  const forAtr = label.toLowerCase();
  return (
    <div className={classes.Field}>
      <label htmlFor={forAtr}>
        <input
          autoComplete="current-password"
          className={inputClasses.join(" ")}
          id={forAtr}
          {...input}
          type={inputType}
        />
        <div className={classes.Label}>{label}</div>
        <span className={classes[inputType]} onClick={e => showPassword(e)}>
          <IconShow />
        </span>
      </label>
      <div className={classes.ErrorMessage}>
        {touched &&
          ((error && <p>{error}</p>) || (warning && <p>{warning}</p>))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showPassword: state.ui.showPassword
  };
};

export default connect(
  mapStateToProps,
  { showPass }
)(Input);
