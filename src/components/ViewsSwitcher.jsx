import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ALL, ACTIVE, COMPLETE, ARCHIVE } from "../constants/view";

import { changeView } from "../actions/view";

import SwitchButton from "./SwitchButton";

const VIEWS = [ALL, ACTIVE, COMPLETE, ARCHIVE];

const TRANSLATIONS_MAPPING = {
  [ALL]: "All",
  [ACTIVE]: "Active",
  [COMPLETE]: "Complete",
  [ARCHIVE]: "Archive"
};

const El = styled.div``;

class ViewsSwitcher extends PureComponent {
  render() {
    const { view, changeView } = this.props;

    return (
      <El>
        {VIEWS.map(viewKind => (
          <SwitchButton
            key={viewKind}
            kind={viewKind}
            changeView={changeView}
            active={viewKind === view}
          >
            {TRANSLATIONS_MAPPING[viewKind]}
          </SwitchButton>
        ))}
      </El>
    );
  }
}

export default connect(state => ({ view: state.view }), { changeView })(
  ViewsSwitcher
);
