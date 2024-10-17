import {
  u,
  r,
  d,
  l,
  dl,
  dr,
  ul,
  ur,
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
  },
  // wavy: {
  //   separate: 'top/bottom',
  //   pattern: [downArrow, upArrow]
  // },
  diamond: {
    separate: 'alternately',
    pattern: [rightArrow, leftArrow]
  },
  diagonal: {
    separate: 'alternately',
    pattern: [
      [ur, dl],
      [ul, dr],
      [ur, dl]
    ]
  }
}
