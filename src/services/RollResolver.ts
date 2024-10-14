import PositionDeclare from './PositionDeclare.js'

export default class {
  private position = new PositionDeclare()

  resolveRoll(cellNum: number): string {
    if (this.position.hoursLeft.indexOf(cellNum) > -1) {
      return 'hoursLeft'
    }
    if (this.position.hoursRight.indexOf(cellNum) > -1) {
      return 'hoursRight'
    }
    if (this.position.minutesLeft.indexOf(cellNum) > -1) {
      return 'minutesLeft'
    }
    if (this.position.minutesRight.indexOf(cellNum) > -1) {
      return 'minutesRight'
    }

    return 'default'
  }
}
