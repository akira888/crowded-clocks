const u: number = 0
const r: number = 90
const d: number = 180
const l: number = 270
const tlCorner: number[] = [r, d]
const trCorner: number[] = [l, d]
const blCorner: number[] = [r, u]
const brCorner: number[] = [l, u]
const wu: number[] = [u, u]
const wd: number[] = [d, d]
const wl: number[] = [l, l]
const wr: number[] = [r, r]
const hLine: number[] = [r, l]
const vLine: number[] = [u, d]
const empty: null[] = [null, null]

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
