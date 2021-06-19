import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { message } from 'antd'
import CommonActions from '@/services/common'

const TopAlert = () => {
  const dispatch = useDispatch()
  const { alert } = useSelector((state) => state.common)

  useEffect(() => {
    if (alert) {
      message[alert.type](alert.message)
      setTimeout(dispatch(CommonActions.clearAlert()), 3000)
    }
  }, [alert])

  return null
}

export default TopAlert
