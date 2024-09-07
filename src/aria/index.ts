import Grid, {AriaGridProps} from "./aria-grid"


export function grid (containerNode: HTMLElement, props: AriaGridProps) {
    const grid = new Grid(containerNode, props)

    return {
      registerEvents: grid.registerEvents,
      clearEvents: grid.clearEvents,
    }
  }

// "main": "dist/index.js",
// "types": "dist/index.d.ts",
// "module": "dist/index.js",