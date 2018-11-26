import React from 'react'
import Icon from '../Icon/component.jsx'

export const getErrors = (formErrors) => {
  let errors = []
  formErrors.forEach(error => {
    errors[error.field] = error.message
  })
  return errors
}

export class ErrorSummary extends React.PureComponent {
  constructor(props) {
    super(props)
    this.item = React.createRef()
  }

  componentDidMount() {
    if (typeof (this.item.current) !== 'undefined') {
      this.item.current.focus()
    }
  }

  render() {
    let { errors } = this.props

    if (!errors) {
      return null
    }

    // Joi duplicates ErrorSummary
    let seen = {}
    errors = errors.filter((item) => {
      return seen.hasOwnProperty(item.field) ? false : (seen[item.field] = true)
    })

    return (
      <div className='alert alert-danger spacing-bottom--single' aria-live='assertive' tabIndex='-1' ref={this.item}>
        <strong className='h4'>There is a problem</strong>
        <ul className='alert-danger__list'>
          {errors.map((error, i) => {
            return (
              <li key={i}><a id={`${error.field}_error`} className='alert-danger__link link-text' href={`#${error.field}`}>{error.message}</a></li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

ErrorSummary.defaultProps = {
  errors: []
}

export const ErrorMessage = ({message}) => (
  <div className='invalid-feedback'><Icon alt='' className='spacing-right' url='/ui/svg/warning.svg' label='warning' />{message}</div>
)
