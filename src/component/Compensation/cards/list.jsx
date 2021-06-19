import React, { useState } from 'react'
import CompensationSearch from '../search'
import CompensationItemCard from './item'

const CompensationList = (data) => {
  return (
    <>
      <div style={{ margin: '30px 0' }}>
        <CompensationSearch />
      </div>
      <CompensationItemCard />
      <CompensationItemCard />
    </>
  )
}

export default CompensationList
