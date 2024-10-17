import PositionDeclare from './PositionDeclare'
import DigitDeclare from './DigitDeclare'
import { patternDeclare } from './PatternDeclare'
export default class {
  private position = new PositionDeclare()
  private digit = new DigitDeclare()

  isClockParts(cellIdx: number): boolean {
    const partsIndex = this.position.hoursLeft.concat(
      this.position.hoursRight,
      this.position.minutesLeft,
      this.position.minutesRight
    )

    return partsIndex.includes(cellIdx)
  }

  resolveHandPosition(digitPosition: number, digit: string) {
    const declareKey = 'digit_' + digit
    return this.digit.positions[declareKey][digitPosition]
  }

  resolveDigitPosition(roll: string, clockPosition: number): number {
    switch (roll) {
      case 'hoursLeft':
        return this.position.hoursLeft.indexOf(clockPosition)
      case 'hoursRight':
        return this.position.hoursRight.indexOf(clockPosition)
      case 'minutesLeft':
        return this.position.minutesLeft.indexOf(clockPosition)
      case 'minutesRight':
        return this.position.minutesRight.indexOf(clockPosition)
      default:
        return 0
    }
  }

  resolvePatternPosition(pattern: string, clockPosition: number): number[] | null[] {
    const format = patternDeclare[pattern]
    const positions = []
    if (format.separate === 'none') {
      positions[0] = format.pattern[0][0]
      positions[1] = format.pattern[0][1]
    }

    return positions
  }
}
