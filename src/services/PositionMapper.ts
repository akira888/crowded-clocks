import BottomCenter from '@/components/clock_parts/BottomCenter.vue'
import BottomRightCorner from '@/components/clock_parts/BottomRightCorner.vue'
import BottomRightSide from '@/components/clock_parts/BottomRightSide.vue'
import BottomLeftCorner from '@/components/clock_parts/BottomLeftCorner.vue'
import BottomLeftSide from '@/components/clock_parts/BottomLeftSide.vue'
import MiddleCenter from '@/components/clock_parts/MiddleCenter.vue'
import MiddleRight from '@/components/clock_parts/MiddleRight.vue'
import MiddleLeft from '@/components/clock_parts/MiddleLeft.vue'
import TopCenter from '@/components/clock_parts/TopCenter.vue'
import TopRightCorner from '@/components/clock_parts/TopRightCorner.vue'
import TopRightSide from '@/components/clock_parts/TopRightSide.vue'
import TopLeftCorner from '@/components/clock_parts/TopLeftCorner.vue'
import TopLeftSide from '@/components/clock_parts/TopLeftSide.vue'

import OtherClock from '@/components/clock_parts/OtherClock.vue'

export default class {
  private hoursLeft = [43, 44, 45, 63, 65, 83, 84, 85, 103, 105, 123, 124, 125]
  private hoursRight = [47, 48, 49, 67, 69, 87, 88, 89, 107, 109, 127, 128, 129]
  private minutesLeft = [52, 53, 54, 72, 74, 92, 93, 94, 112, 114, 132, 133, 134]
  private minutesRight = [56, 57, 58, 76, 78, 96, 97, 98, 116, 118, 136, 137, 138]
  private partsIndex = [
    TopLeftCorner,
    TopCenter,
    TopRightCorner,
    TopLeftSide,
    TopRightSide,
    MiddleLeft,
    MiddleCenter,
    MiddleRight,
    BottomLeftSide,
    BottomRightSide,
    BottomLeftCorner,
    BottomCenter,
    BottomRightCorner
  ]

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

  findComponent(cellNum: number): any {
    const hoursLeftIndex = this.hoursLeft.indexOf(cellNum)
    if (hoursLeftIndex > -1) {
      return this.partsIndex[hoursLeftIndex]
    }

    const hoursRightIndex = this.hoursRight.indexOf(cellNum)
    if (hoursRightIndex > -1) {
      return this.partsIndex[hoursRightIndex]
    }
    const minutesLeftIndex = this.minutesLeft.indexOf(cellNum)
    if (minutesLeftIndex > -1) {
      return this.partsIndex[minutesLeftIndex]
    }
    const minutesRightIndex = this.minutesRight.indexOf(cellNum)
    if (minutesRightIndex > -1) {
      return this.partsIndex[minutesRightIndex]
    }
    return OtherClock
  }
}
