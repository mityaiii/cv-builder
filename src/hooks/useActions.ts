import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { actions, evaluatedPointsActions } from "@/store/index"
import { contactsActions } from "@/store/index"
import { linksActions } from "@/store/index"
import { extendedTextActions } from "@/store/index"
import { useDispatch } from "react-redux"

const rootActions = {
  ...actions,
  ...evaluatedPointsActions,
  ...contactsActions,
  ...linksActions,
  ...extendedTextActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}