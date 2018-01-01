import * as actionTypes from './constants/actionTypes';

// Timer
export const incrementTime = ms => ({ type: actionTypes.INCREMENT_TIME, ms });
export const resetTime = () => ({ type: actionTypes.RESET_TIME });
export const startTimer = () => ({ type: actionTypes.START_TIMER });
export const stopTimer = () => ({ type: actionTypes.STOP_TIMER });

// Activation
export const prepareActivation = () => ({ type: actionTypes.PREPARE_ACTIVATION });
export const fireActivation = () => ({ type: actionTypes.FIRE_ACTIVATION });

// Scramble
export const setScramble = scramble => ({ type: actionTypes.SET_SCRAMBLE, scramble });

// Times
export const saveTime = (id, ms, date, scramble, puzzle) => ({
  type: actionTypes.SAVE_TIME,
  id, ms, date, scramble, puzzle
});
export const loadTimes = (current = [], archive = []) => ({ type: actionTypes.LOAD_TIMES, current, archive });
export const removeTime = id => ({ type: actionTypes.REMOVE_TIME, id });
export const clearTimes = () => ({ type: actionTypes.CLEAR_TIMES });

export const showTimeDetails = id => ({ type: actionTypes.SHOW_TIME_DETAILS, id });
export const hideTimeDetails = id => ({ type: actionTypes.HIDE_TIME_DETAILS, id });

// Archive
export const openArchiveModal = () => ({ type: actionTypes.OPEN_ARCHIVE_MODAL });
export const closeArchiveModal = () => ({ type: actionTypes.CLOSE_ARCHIVE_MODAL });
export const archiveCurrentTimes = () => ({ type: actionTypes.ARCHIVE_CURRENT_TIMES });
export const inputTimesTitle = title => ({ type: actionTypes.INPUT_ARCHIVE_TITLE, title });
export const archive = (id, times, puzzle) => ({ type: actionTypes.ARCHIVE, id, times, puzzle });
export const expandArchiveItem = id => ({ type: actionTypes.EXPAND_ARCHIVE_ITEM, id });
export const collapseArchiveItem = id => ({ type: actionTypes.COLLAPSE_ARCHIVE_ITEM, id });
export const removeArchiveItem = id => ({ type: actionTypes.REMOVE_ARCHIVE_ITEM, id });
export const sortArchive = sortBy => ({ type: actionTypes.SORT_ARCHIVE, sortBy });
export const filterArchive = puzzle => ({ type: actionTypes.FILTER_ARCHIVE, puzzle });

// Settings
export const changePuzzle = puzzle => ({ type: actionTypes.CHANGE_PUZZLE, puzzle });
