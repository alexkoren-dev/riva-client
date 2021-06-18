import { useState, useRef, useEffect } from 'react'
import { getRandomId, isEmpty } from '../utils'
import axios from 'axios'
import clientRequest from '../utils/request'

const useRequest = () => {
  const requests = useRef({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      for (let key in requests.current) {
        requests.hasOwnProperty(key) && requests[key]?.('cancel')
      }
    }
  }, [])

  return [
    async (data, showLoading = true) => {
      // 规定组件内所有请求都通过 此方法来发送以便维护
      if (showLoading) {
        !loading && setLoading(true)
      }
      const _id = getRandomId()
      const promise = clientRequest(
        Object.assign(
          { data, action: data.action },
          {
            cancelToken: new axios.CancelToken((cancel) => {
              requests.current[_id] = cancel
            })
          }
        )
      )

      try {
        await promise
      } catch (e) {}

      delete requests.current[_id]
      if (isEmpty(requests.current)) {
        setLoading(false)
      }

      return promise
    },
    loading
  ]
}

export default useRequest
