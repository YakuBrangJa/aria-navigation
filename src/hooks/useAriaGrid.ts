import {grid} from 'aria'
import React, {MutableRefObject, useEffect, useRef} from 'react'

export interface AriaGridHookProps {
  rowSelector: string
  colSelector: string
  onReachStart?: () => void
  onReachEnd?: () => void
}

export function useAriaGrid ({rowSelector, colSelector, onReachEnd, onReachStart}: AriaGridHookProps, depArray: any[], ref?: MutableRefObject<HTMLElement | undefined>) {

  const parentNode = ref || useRef<HTMLElement>();

  useEffect(() => {
    if(!parentNode.current) return;

    const ariaGrid = grid(parentNode.current, {
      rowSelector,
      colSelector,
      handlers: {
        onReachStart,
        onReachEnd
      }
    })

    ariaGrid.registerEvents()

    return () => ariaGrid.clearEvents()
  }, [...depArray]);

  return parentNode;

}
export default useAriaGrid
