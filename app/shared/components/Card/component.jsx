import React from 'react'
import Picture from '../Picture/component.jsx'
import Heading from '../Heading/component.jsx'
import Time from '../Time/component.jsx'
import PropTypes from 'prop-types'

const Card = props => {
  const video = props.headerVideo

  return (
    <div className={`card ${props.className}`}>
      <a href={props.url} className='card__link'>
        {props.images && <Picture video={video} {...props.images}/>}
        <div className='card-body'>
          {props.time && <Time time={props.time} datetime={props.datetime}/>}
          <Heading {...props.heading}/>
          {props.content && <p className='card-text'>{props.content}</p>}
          {props.linkLabel && <p className='link-text' aria-hidden='true'>{props.linkLabel}</p>}
        </div>
      </a>
    </div>
  )
}

Card.defaultProps = {
  headerVideo: null,
  className: ''
}

export default Card
