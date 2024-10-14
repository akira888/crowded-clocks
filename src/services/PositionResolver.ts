import PositionDeclare from './PositionDeclare.js'

export default class {
  private position = new PositionDeclare()

  isClockParts(cellIdx: number): boolean {
    const partsIndex = this.position.hoursLeft.concat(
      this.position.hoursRight,
      this.position.minutesLeft,
      this.position.minutesRight
    )

    return partsIndex.includes(cellIdx)
  }
}
