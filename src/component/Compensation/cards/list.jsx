import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import CompensationSearch from '../search'
import CompensationItemCard from './item'
import actions from '@/services/compensation'

const ITEMS_PER_PAGE = 5

const CompensationList = () => {
  const dispatch = useDispatch()
  const mountedRef = useRef(true)
  const { allCompensations, totalCount } = useSelector(
    (state) => state.compensation
  )
  const [loading, setLoading] = useState(false)
  const [pageNo, setPageNo] = useState(0)
  const [searchString, setSearchString] = useState('')
  const [hasMore, setHasMore] = useState(true)

  const getAllCompensations = useCallback(
    async (page, search = '', refresh = false) => {
      try {
        if (refresh) await dispatch(actions.clearCompensations())

        setLoading(true)
        await dispatch(
          actions.getAllCompensations(page, ITEMS_PER_PAGE, search)
        )

        if (!mountedRef.current) return null
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    if (allCompensations.length === 0) {
      getAllCompensations(pageNo)
      return () => {
        mountedRef.current = false
      }
    }
  }, [])

  const onNext = async () => {
    if (allCompensations.length >= totalCount) {
      setHasMore(false)
      return
    }

    await getAllCompensations(pageNo + 1, searchString)
    setPageNo(pageNo + 1)
  }

  const onSearch = async (keys) => {
    await getAllCompensations(0, keys.toString(), true)
    setHasMore(true)
    setSearchString(keys.toString())
    setPageNo(0)
  }

  let compensationsList = allCompensations

  if (loading)
    compensationsList = allCompensations.concat(
      Array.from({ length: ITEMS_PER_PAGE }, () => null)
    )

  return (
    <>
      <div style={{ margin: '30px 0' }}>
        <CompensationSearch
          onSearch={(keys) => onSearch(keys)}
          loading={loading}
        />
      </div>
      {compensationsList.length === 0 ? (
        <Typography.Text type="secondary">No data found</Typography.Text>
      ) : (
        <div id="compensationScroll">
          <InfiniteScroll
            dataLength={compensationsList.length}
            next={onNext}
            hasMore={hasMore}
            style={{ padding: 40, margin: -40 }}
            loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
          >
            {compensationsList.map((compensation, key) => (
              <CompensationItemCard key={key} compensation={compensation} />
            ))}
          </InfiniteScroll>
        </div>
      )}
    </>
  )
}

export default CompensationList
