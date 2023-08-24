import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { actions, evaluatedPointsActions } from "@/store/index"
import { useDispatch } from "react-redux"

const rootActions = {
  ...actions,
  ...evaluatedPointsActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}