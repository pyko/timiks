import styled from 'styled-components';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/fontawesome-pro-solid'

import Shortcut from './shared/Shortcut';
import { ACTIVATION_DURATION_OPTIONS } from '../constants/app';
import IconButton from './shared/IconButton';
import ToggleContent from './ToggleContent';
import Section from './shared/Section';
import Selector from './shared/Selector';
import Button from './shared/Button';
import Modal from './shared/Modal';

const Settings = ({
  settings,
  changeActivationDuration,
  toggleInspectionTime,
  changeTheme,
  toggleManualTimeEntry
}) => (
  <span>
    <ToggleContent
      toggle={({ show }) => (
        <IconButton onClick={show}>
          <Shortcut command="openSettings" action={show}/>
          <FontAwesome icon={faCog}/>
        </IconButton>
      )}
      content={({ hide }) => (
        <Modal
          title="Settings"
          onClose={hide}
        >
          <Fragment>
            <Section margin="sm">
              <Selector
                label="Activation delay*"
                onChange={changeActivationDuration}
                options={ACTIVATION_DURATION_OPTIONS}
                value={settings.activationDuration}
                numeric
                fullWidth
              />
            </Section>
            <Section margin="sm">
              <Setting>
                <span>Manual time entry</span>
                <Checkbox type="checkbox" onChange={toggleManualTimeEntry} checked={settings.useManualTimeEntry}/>
              </Setting>
            </Section>
            <Section margin="sm">
              <Setting>
                <span>Use inspection time</span>
                <Checkbox type="checkbox" onChange={toggleInspectionTime} checked={settings.useInspectionTime}/>
              </Setting>
            </Section>
            <Section margin="md">
              <Setting>
                <span>Night mode</span>
                <Checkbox
                  type="checkbox"
                  onChange={() => changeTheme(settings.theme === 'dark' ? 'light' : 'dark')}
                  checked={settings.theme === 'dark'}
                />
              </Setting>
            </Section>
            <Section margin="md">
              <i>*For how long you have to hold spacebar, mouse or touch before starting the timer.</i>
            </Section>
            <Button onClick={hide}>Close</Button>
          </Fragment>
        </Modal>
      )}
    />
  </span>
);

const Setting = styled.label`
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  margin-right: ${props => props.theme.sizes.xs};
  cursor: pointer;
`;

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  changeActivationDuration: PropTypes.func.isRequired,
  toggleInspectionTime: PropTypes.func.isRequired,
  toggleManualTimeEntry: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default React.memo(Settings);
