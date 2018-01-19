import { connect } from 'react-redux';

import TimeTable from '../components/TimeTable';
import { removeTime, showTimeDetails, hideTimeDetails } from '../actions';
import * as times from '../helpers/times';

function mapStateToProps(state) {
  return {
    times: times.markShowDetails(times.markBestTime(state.times.current), state.times.timeDetailsShown),
    average: times.calculateAverageTime(state.times.current),
    averageOfBestThree: times.calculateAverageTimeOfBestThree(state.times.current)
  };
}

export default connect(
  mapStateToProps,
  { removeTime, showTimeDetails, hideTimeDetails }
)(TimeTable);
