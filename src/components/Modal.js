import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import GlobalStyles from "../styles/styles";
import Images from "../styles/images";

export default class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    continueText: PropTypes.string,
    continueEnabled: PropTypes.bool,
    onCancel: PropTypes.func,
    onContinue: PropTypes.func
  };

  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _onKeyDown(e) {
    if (e.keyCode === 27) {
      // escape
      this.props.onCancel();
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }

  selectButton() {
    const { continueEnabled, continueText, onContinue } = this.props;
    let style;
    if (continueEnabled) {
      style = Styles.selectButtonEnabled;
    } else {
      style = Styles.selectButtonDisabled;
    }

    return (
      <div
        className={css(GlobalStyles.button, Styles.selectButton, style)}
        onClick={continueEnabled ? this.props.onContinue : () => {}}
      >
        <p>{continueText || "Continue"}</p>
      </div>
    );
  }

  render() {
    return (
      <div className={css(Styles.root)}>
        <div className={css(Styles.bg)} />
        <div className={css(Styles.box)}>
          <div className={css(Styles.header)}>
            <p className={css(Styles.title)}>{this.props.title}</p>
            <Images.clear
              styles={[Styles.closeButton]}
              onClick={this.props.onCancel}
            />
          </div>
          {this.props.children}
          <div className={css(Styles.select)}>
            {this.selectButton()}
            <div className={css(Styles.finishButton, Styles.cancelButton)}>
              <p onClick={this.props.onCancel}>Cancel</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Styles = StyleSheet.create({
  bg: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 9,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.75
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginRight: "auto"
  },
  closeButton: {},
  box: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
    backgroundColor: "white",
    borderRadius: "4px",
    border: "1px solid #000",
    boxShadow: "1px 1px 1px #000",
    padding: 20,
    minWidth: 480
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  select: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row"
  },
  finishButton: {
    borderRadius: 5,
    height: 40,
    width: 80,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  selectButton: {
    backgroundColor: "rgb(77,144,254)",
    color: "white"
  },
  selectButtonDisabled: {
    cursor: "default",
    opacity: 0.5
  }
});
