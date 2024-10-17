import PositionDeclare from './PositionDeclare'
import DigitDeclare from './DigitDeclare'
import { patternDeclare } from './PatternDeclare'
import type { Times } from '@/types/Times'
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

  resolveHandPosition(digitPosition: number, digit: string, times: Times): number[] {
    const declareKey = 'digit_' + digit
    let _position = this.digit.positions[declareKey][digitPosition]
    if (_position === null) {
      _position = this.resolveTimePositions(times)
    }

    return _position
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

  resolveTimePositions(times: Times): number[] {
    return [this.smallHandDegree(times), this.bigHandDegree(times)]
  }

  bigHandDegree(times: Times): number {
    const hours = times.hours % 12
    const minutes = times.minutes
    let degree = 30 * hours
    degree += minutes > 0 ? 0.5 * minutes : 0
    return degree
  }

  smallHandDegree(times: Times): number {
    const minutes = times.minutes
    const seconds = times.seconds
    const degree = 6 * minutes + 0.1 * seconds
    return degree
  }
}
