import {
  u,
  r,
  d,
  l,
  tlCorner,
  trCorner,
  blCorner,
  brCorner,
  wu,
  wd,
  wl,
  wr,
  hLine,
  vLine,
  upArrow,
  downArrow,
  leftArrow,
  rightArrow
} from './PositionSymbols'
interface PatternKeyObject {
  [key: string]: {
    separate: string
    pattern: Array<number[]>
  }
}
export const patternDeclare: PatternKeyObject = {
  flat: {
    separate: 'none',
    pattern: [hLine]
  },
  vertical: {
    separate: 'none',
    pattern: [vLine]
  }
  // wavy: [downArrow, downArrow, upArrow, upArrow],
  // diamond: [leftArrow, rightArrow, leftArrow, rightArrow]
}
