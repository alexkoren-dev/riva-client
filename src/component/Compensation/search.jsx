import React from 'react'
import { Select } from 'antd'
import SearchIcon from '@/assets/icons/search'

const CompensationSearch = () => {
  return (
    <div className="compensation-search">
      <SearchIcon className="search-icon" />
      <Select
        mode="tags"
        size="large"
        open={false}
        className="tag-input"
        placeholder="ex: LE5"
      ></Select>
    </div>
  )
}

export default CompensationSearch
