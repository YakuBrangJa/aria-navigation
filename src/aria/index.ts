import Grid, {AriaGridProps} from "./aria-grid"


export function grid (containerNode: HTMLElement, props: AriaGridProps) {
    const grid = new Grid(containerNode, props)

    return {
      registerEvents: grid.registerEvents,
      clearEvents: grid.clearEvents,
    }
  }

