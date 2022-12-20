import React, {useState} from "react"
import {FaSearch} from 'react-icons/fa'
import './../assets/SearchBar.css'

const SearchBar = (props) => {

  const [searchText, setSearchText] = useState('')
  const items = props.items ?? []
  const groups = props.groups ?? []

  const [showResults, setShowResults] = useState(false)

  const getGroupPath = (groupId) => {
    if (!groupId) {
      return ''
    }

    const group = groups.find(group => group.id === groupId)

    if (!group) {
      return ''
    }

    if (group.parent) {
      return getGroupPath(group.parent) + ' -> ' + group.title
    }

    return group.title
  }

  const getItemGroupPath = (item) => {
    const path = getGroupPath(item.group)
    return path.length > 0 ? path + ':' : path
  }

  const getItems = () => {
    let filteredItems = items
    if (searchText.length > 0) {
      filteredItems = items.filter(item => String(item.title).toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase()))
    }

    return <>
      {filteredItems.map(item =>
        <div
          className="search-bar-result"
          onClick={() => props.focus(item)}
        >
          {getItemGroupPath(item)} {item.title.length > 0 ? item.title : 'no title'}
        </div>
      )}
    </>
  }

  return (
    <div className="search-bar-container"
         onFocus={() => setShowResults(true)}
         onBlur={() => setTimeout(() => {
           setShowResults(false)
         }, 100)}
    >
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch className="search-bar-icon"/>
      </div>
      <div className={`search-bar-results ${showResults ? 'active' : ''}`}>
        {getItems()}
      </div>
    </div>
  )
}

export default SearchBar