import React from "react";
import { connect } from "react-redux";

const Notification = (props) => {
  if (props.notification !== "")
    return <div className="notif">{props.notification}</div>;
  return null;
};

const mapStateToProps = (state) => {
  return { notification: state.notification };
};

export default connect(mapStateToProps)(Notification);
