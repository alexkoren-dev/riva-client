import React, { useEffect } from 'react'
import { Select } from 'antd'
import SearchIcon from '@/assets/icons/search'

const CompensationSearch = ({ onSearch, loading }) => {
  // useEffect(() => {
  //   if(loading) {
  //     document.querySelector(".tag-input input").blur()
  //   } else {
  //     document.querySelector(".tag-input input").focus()
  //   }
  // }, [loading])

  return (
    <div className="compensation-search">
      {loading && <div className="disable" />}
      <SearchIcon className="search-icon" />
      <Select
        mode="tags"
        size="large"
        open={false}
        className="tag-input"
        placeholder="ex: Senior, Google, San Francisco"
        onChange={(keys) => onSearch(keys)}
      ></Select>
    </div>
  )
}

export default CompensationSearch
