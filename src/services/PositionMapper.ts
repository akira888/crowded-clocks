export default class {
  private hoursLeft = [43, 44, 45, 63, 65, 83, 84, 85, 103, 105, 123, 124, 125]
  private hoursRight = [47, 48, 49, 67, 69, 87, 88, 89, 107, 109, 127, 128, 129]
  private minutesLeft = [52, 53, 54, 72, 74, 92, 93, 94, 112, 114, 132, 133, 134]
  private minutesRight = [56, 57, 58, 76, 78, 96, 97, 98, 116, 118, 136, 137, 138]

  findRoll(cellNum: number): string {
    if (this.hoursLeft.indexOf(cellNum) > -1) {
      return 'hoursLeft'
    }
    if (this.hoursRight.indexOf(cellNum) > -1) {
      return 'hoursRight'
    }
    if (this.minutesLeft.indexOf(cellNum) > -1) {
      return 'minutesLeft'
    }
    if (this.minutesRight.indexOf(cellNum) > -1) {
      return 'minutesRight'
    }

    return 'default'
  }

  isClockParts(cellIdx: number): boolean {
    const partsIndex = this.hoursLeft.concat(this.hoursRight, this.minutesLeft, this.minutesRight)

    return partsIndex.includes(cellIdx)
  }
}
