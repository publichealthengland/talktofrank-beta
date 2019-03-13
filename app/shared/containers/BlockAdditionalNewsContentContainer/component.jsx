import { connect } from 'react-redux'

import BlockAdditionalNewsContent from '../../components/BlockAdditionalNewsContent/component.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.app
}

export default connect(mapStateToProps)(BlockAdditionalNewsContent)
