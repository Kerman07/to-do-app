import React from "react";
import { connect } from "react-redux";

const Notification = (props) => {
  const style = {
    border: "solid",
    fontSize: 18,
    padding: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    color: "red",
    textAlign: "center",
    verticalAlign: "middle",
  };
  if (props.notification !== "")
    return <div style={style}>{props.notification}</div>;
  return null;
};

const mapStateToProps = (state) => {
  return { notification: state };
};

export default connect(mapStateToProps)(Notification);
