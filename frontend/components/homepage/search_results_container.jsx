import react from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SearchResults from './search_results'
import { searchQuestions } from '../../actions/question_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
  searchQuestions: (query_params) => dispatch(searchQuestions(query_params))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults))