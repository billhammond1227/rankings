import Switch from './Switch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';
import '../styles/main.scss';

function mapStateToProps(state){
  return {
    state
  }
}
function mapDispatchtoProps(dispatch){
  return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchtoProps)(Switch))

export default App;
