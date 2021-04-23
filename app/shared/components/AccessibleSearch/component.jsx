import React from 'react'
import Autocomplete from 'accessible-autocomplete/react'
import Button from '../Button/component'
import Icon from '../Icon/component'
import Form from '../Form/component.jsx'

export default class AccessibleSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  suggest(query, populateResults) {
    fetch(`/api/v1/search/autocomplete/${query}?page=0&pageSize=10`)
      .then(res => res.json())
      .then(data => {
        const results = data.hits.map(drug => {
          if (drug._source.title) {
            return drug._source.title
            /*eslint-disable */
          } else if (drug._source.name != drug._source.realName) {
            /*eslint-enable */
            return `<span class='autocomplete__option--background'>${drug._source.name}</span> (${drug._source.realName})`
          }
          return `<span class='autocomplete__option--background'>${drug._source.realName}</span>`
        })
        populateResults(results)
      })
      .catch(e => console.error(e))
  }
  handleSearchSubmit() {
    const searchTerm = encodeURIComponent(
      this.state.searchTerm.toLowerCase().trim()
    )
    if (searchTerm !== '') {
      window.location = `/search/${searchTerm}`
    }
  }

  onChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render() {
    const iconSubmit = {
      label: 'Submit search',
      url: '/ui/svg/magnifying-white.svg'
    }
    return (
      <Form
        onSubmit={this.handleSearchSubmit.bind(this)}
        role="search"
        className="form--search constrain form--search-home"
      >
        <div className="accessiblesearch__wrapper">
          <label
            htmlFor="autocomplete"
            className="form-label form-label--large"
          >
            Search for any drug...
          </label>
          <div className="accessiblesearch__container">
            <Autocomplete
              id="autocomplete"
              name="search"
              source={this.suggest}
              placeholder="Look up a drug (don't worry about typos)"
              onConfirm={text => {
                this.setState({
                  searchTerm: text.replace(/<\/?span[^>]*>/g, '')
                })
              }}
              templates={{
                inputValue: str =>
                  str ? str.replace(/<\/?span[^>]*>/g, '') : str
              }}
              displayMenu="overlay"
            />
            <Button
              className="btn btn--search submit"
              clickHandler={this.handleSearchSubmit.bind(this)}
            >
              <Icon {...iconSubmit} />
            </Button>
          </div>
        </div>
      </Form>
    )
  }
}