import React from 'react'
import { config } from 'config'

export default class Head extends React.Component {
  render() {
    const { location, initialState, pageLoadError } = this.props
    const { head, title, error } = initialState.app.pageData
    // eslint-disable-next-line
    const contentType = initialState.app.pageData?.sys?.contentType?.sys.id

    let pageTitle
    let ogPageTitle
    let pageDescription
    let canonical = false
    let path
    let ampLink = false

    if (!error && !pageLoadError) {
      path = location.pathname ? location.pathname : null
      canonical = `${config.canonicalHost}${path}`
      ampLink =
        contentType === 'news' ? `${config.canonicalHost}/amp${path}` : false

      if (head && head.description && head.pageTitle) {
        ogPageTitle = head.title ? head.title : head.pageTitle
        pageTitle = head.pageTitle
        pageDescription = head.description
      } else {
        path = location.pathname ? location.pathname.replace(/\/\d/, '') : null
        switch (path) {
          case '/drugs-a-z':
            ogPageTitle = pageTitle = 'Drugs A to Z'
            pageDescription =
              'Know what’s what, with FRANK’s A to Z of drugs. It includes all the slang names and all the facts.'
            break

          case '/get-help':
            ogPageTitle = pageTitle = 'Help & advice'
            pageDescription =
              'Are you worried about a friend/child or unsure of what to do in a drug related emergency? Contact FRANK for help & advice.'
            break

          case '/news':
          case '/latest':
            ogPageTitle = pageTitle =
              'Frank News | The Latest Stories and Articles'
            pageDescription =
              "Stay up to date with the latest news about drugs and what the law says about them.  Stay up to date with the FRANK's latest news about drugs, recent discoveries and what the law says about them."
            break

          case '/get-help/find-support-near-you':
            ogPageTitle = pageTitle = 'Find support near you'
            pageDescription = 'Find support near you'
            break

          case '/livechat':
            ogPageTitle = pageTitle = 'Live Chat'
            pageDescription = 'Live Chat'
            break

          case '/contact-frank':
            ogPageTitle = pageTitle =
              'Contact Frank Directly | Confidential Advice'
            pageDescription =
              'For friendly, confidential drugs advice, talk to FRANK. Call, text or email for answers to your questions or if you just want a chat.'
            break

          case '/offline':
          case '/offline/':
            ogPageTitle = pageTitle = "You're Offline"
            pageDescription = ''
            break

          default:
            ogPageTitle = pageTitle = (head && head.title) || pageTitle
            pageDescription = (head && head.description) || pageTitle
            break
        }
      }
    } else {
      const errorCode = pageLoadError ? pageLoadError.error : error
      canonical = `${config.canonicalHost}/page-not-found`
      switch (errorCode) {
        case 404:
          ogPageTitle = pageTitle = 'Page not found (404)'
          pageDescription = 'Page not found (404)'
          break

        case 500:
          ogPageTitle = pageTitle = 'Server error'
          pageDescription = 'Server error'
          break
      }
    }

    return (
      <head>
        <title>{pageTitle + ` | FRANK`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta content="width=device-width,initial-scale=1.0" name="viewport" />
        <meta content="on" httpEquiv="cleartype" />
        <meta name="format-detection" content="telephone=no" />
        {ampLink && <link rel="amphtml" href={ampLink} />}
        {canonical && <link rel="canonical" href={canonical} />}
        {head && head.noindex && <meta name="robots" content="noindex" />}
        <meta property="twitter:title" content={ogPageTitle + ` | FRANK`} />
        <meta
          property="twitter:description"
          content={pageDescription + ` | FRANK`}
        />
        {head && head.image && (
          <meta property="twitter:image" content={head.image} />
        )}
        <meta property="og:title" content={ogPageTitle + ` | FRANK`} />
        {head && head.image && (
          <meta property="og:image" content={head.image} />
        )}
        <meta
          property="og:description"
          content={pageDescription + ` | FRANK`}
        />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="manifest" href="/ui/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.0.0/alt/video-js-cdn.min.css"
          integrity="sha512-zki7IiwYvLzVZouKA+V/vtIuW7cK8M2ug1kaRBItuBWG8TDvA6jrtjhKPOrz3RFGpt9OQC/xE7DUfsrHxoBXxg=="
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={`/ui/css/main.css${
            !location || location.pathname === '/offline'
              ? ''
              : `?v=${this.props.cacheBusterTS}`
          }`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.addEventListener('touchstart', function onFirstTouch() {
          document.documentElement.classList.remove('has-hover')
          window.removeEventListener('touchstart', onFirstTouch, false)
        }, false)`
          }}
        />
      </head>
    )
  }
}

Head.defaultProps = {
  pageTitle: 'Talk to Frank'
}
