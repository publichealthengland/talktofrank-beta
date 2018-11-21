import React from 'react'
import Accent from '../Accent/component'
import Masthead from '../Masthead/component'
import Divider from '../Divider/component'
import Heading from '../Heading/component'
import Footer from '../Footer/component'
import GA from '../GoogleAnalytics/component'
import Grid from '../Grid/component'
import GridCol from '../GridCol/component'
import Main from '../Main/component'
import Longform from '../Longform/component'

const PageGeneral = props => {
  return (
    <React.Fragment>
      <Masthead path={props.location}/>
      <Main>
        <Accent className='accent--shallow'>
          <Heading type='h1' className='h2 spacing-left spacing--single' text={props.title} />
        </Accent>
        <Accent className='accent--shallow' modifier='wrapper--constant'>
          <Grid>
            <GridCol className='col-12 col-md-8 md-offset-2'>
              {props.fields.body && <Longform text={props.fields.body}/>}
            </GridCol>
          </Grid>
        </Accent>
      </Main>
      <Footer />
      <GA/>
    </React.Fragment>
  )
}

export default PageGeneral
