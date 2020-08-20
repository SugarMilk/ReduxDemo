import { connect } from "react-redux"
import { getCount } from '../actions'
import Count from '../components/Count'

const mapStateToProps = (state, ownProps) => ({
  count: state.api
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(getCount())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Count)
