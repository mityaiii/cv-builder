import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { actions } from "@/store/index"
import { useDispatch } from "react-redux"

const rootActions = {
  ...actions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}