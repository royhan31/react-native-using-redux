import { connect } from 'react-redux';

import * as Actions from './ActionsTypes';
import CounterComponent from '../Components/CounterComponents';

const mapStateToProps = (state) => ({
     count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
