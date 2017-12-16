import * as constants from './constants';

export const incrementTime = ms => ({
  type: constants.INCREMENT_TIME,
  ms
});

export const resetTime = () => ({
  type: constants.RESET_TIME
});

export const startTimer = () => ({
  type: constants.START_TIMER
});

export const stopTimer = () => ({
  type: constants.STOP_TIMER
});

export const prepareActivation = () => ({
  type: constants.PREPARE_ACTIVATION
});

export const fireActivation = () => ({
  type: constants.FIRE_ACTIVATION
});

export const setScramble = scramble => ({
  type: constants.SET_SCRAMBLE,
  scramble
});

export const saveTime = (id, ms, date, scamble) => {
  const type = constants.SAVE_TIME;

  return { type, id, ms, date, scamble };
};

export const removeTime = id => ({
  type: constants.REMOVE_TIME,
  id
});
