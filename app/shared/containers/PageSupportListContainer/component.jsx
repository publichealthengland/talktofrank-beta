import { connect } from 'react-redux'

import PageSupportList from '../../components/PageSupportList/component.jsx'
import { fetchSupportList } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return state.app
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSupportList: (page, location, serviceType) => {
      dispatch(fetchSupportList(page, { location, serviceType }))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSupportList)
