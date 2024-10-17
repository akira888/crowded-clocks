import {
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
  empty
} from './PositionSymbols'

interface StringKeyObject {
  [key: string]: any[]
}
export default class {
  private _positions: StringKeyObject = {
    digit_0: [
      tlCorner,
      hLine,
      trCorner,
      vLine,
      vLine,
      vLine,
      empty,
      vLine,
      vLine,
      vLine,
      blCorner,
      hLine,
      brCorner
    ],
    digit_1: [empty, empty, wd, empty, vLine, empty, empty, vLine, empty, vLine, empty, empty, wu],
    digit_2: [
      wr,
      hLine,
      trCorner,
      empty,
      vLine,
      tlCorner,
      hLine,
      brCorner,
      vLine,
      empty,
      blCorner,
      hLine,
      wl
    ],
    digit_3: [
      wr,
      hLine,
      trCorner,
      empty,
      vLine,
      wr,
      hLine,
      trCorner,
      empty,
      vLine,
      wr,
      hLine,
      brCorner
    ],
    digit_4: [
      wd,
      empty,
      wd,
      vLine,
      vLine,
      blCorner,
      hLine,
      trCorner,
      empty,
      vLine,
      empty,
      empty,
      wu
    ],
    digit_5: [
      tlCorner,
      hLine,
      wl,
      vLine,
      empty,
      blCorner,
      hLine,
      trCorner,
      empty,
      vLine,
      wr,
      hLine,
      brCorner
    ],
    digit_6: [
      tlCorner,
      hLine,
      wl,
      vLine,
      empty,
      tlCorner,
      hLine,
      trCorner,
      vLine,
      vLine,
      blCorner,
      hLine,
      brCorner
    ],
    digit_7: [
      wr,
      hLine,
      trCorner,
      empty,
      vLine,
      empty,
      empty,
      vLine,
      empty,
      vLine,
      empty,
      empty,
      wu
    ],
    digit_8: [
      tlCorner,
      hLine,
      trCorner,
      vLine,
      vLine,
      blCorner,
      hLine,
      trCorner,
      vLine,
      vLine,
      blCorner,
      hLine,
      brCorner
    ],
    digit_9: [
      tlCorner,
      hLine,
      trCorner,
      vLine,
      vLine,
      blCorner,
      hLine,
      trCorner,
      empty,
      vLine,
      wr,
      hLine,
      brCorner
    ]
  }

  get positions() {
    return this._positions
  }
}
