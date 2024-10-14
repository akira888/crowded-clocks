export default class {
  private _hoursLeft = [43, 44, 45, 63, 65, 83, 84, 85, 103, 105, 123, 124, 125]
  private _hoursRight = [47, 48, 49, 67, 69, 87, 88, 89, 107, 109, 127, 128, 129]
  private _minutesLeft = [52, 53, 54, 72, 74, 92, 93, 94, 112, 114, 132, 133, 134]
  private _minutesRight = [56, 57, 58, 76, 78, 96, 97, 98, 116, 118, 136, 137, 138]

  get hoursLeft() {
    return this._hoursLeft
  }

  get hoursRight() {
    return this._hoursRight
  }

  get minutesLeft() {
    return this._minutesLeft
  }

  get minutesRight() {
    return this._minutesRight
  }

  get clockPositions() {
    return this.hoursLeft.concat(this.hoursRight, this.minutesLeft, this.minutesRight)
  }
}
