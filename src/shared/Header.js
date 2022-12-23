import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromBreadCrumb, resetBreadcrumb } from "../actions/actions";

import "./Header.css";

function Squads(props) {
  const navigate = useNavigate();

  const breadcrumbNav = (index) => {
    navigate(index - props.breadcrumb.length + 1);
    props.removeFromBreadCrumb(index - props.breadcrumb.length + 1);
  };

  const navToHome = () => {
    navigate("/");
    props.resetBreadcrumb();
  };

  return (
    <div className="header">
      <div className="header-name">
        <div onClick={navToHome}>
          <h3>FOOTBALL DATA APP</h3>
        </div>
      </div>

      <div className="breadcrumb">
        {props.breadcrumb.map((item, index) => {
          return (
            <React.Fragment key={item}>
              <p
                className={
                  index + 1 === props.breadcrumb.length
                    ? "breadcrumb-item"
                    : "breadcrumb-item link"
                }
                onClick={
                  index + 1 === props.breadcrumb.length
                    ? undefined
                    : () => breadcrumbNav(index)
                }
              >
                {item}
              </p>
              {props.breadcrumb.length > index + 1 ? (
                <p className="breadcrumb-item">{">"}</p>
              ) : (
                <></>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  removeFromBreadCrumb,
  resetBreadcrumb,
};

export default connect(mapStateToProps, mapDispatchToProps)(Squads);
