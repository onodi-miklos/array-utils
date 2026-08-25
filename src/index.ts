export function selectArray <T,> (activeArray: T[]) {
    return {
        array: function (): T[] {
            return activeArray
        },
        concat: function (arrays: T[][]) {
            for (const array of arrays) {
                for (const item of array) {
                    activeArray.push(item)
                }
            }
            return selectArray(activeArray)
        },
        copyWithin: function (target: number, start: number = 0, end: number = activeArray.length) {
          target = Math.floor(target)
          if (target > activeArray.length) {
            target = activeArray.length
          }
          if (target < 0) {
            target = activeArray.length + target
            if (target < 0) {
              target = 0
            }
          }
          start = Math.floor(start)
          if (start > activeArray.length) {
            start = activeArray.length
          }
          if (start < 0) {
            start = activeArray.length + start
            if (start < 0) {
              start = 0
            }
          }
          end = Math.floor(end)
          if (end > activeArray.length) {
            end = activeArray.length
          }
          if (end < 0) {
            end = activeArray.length + end
            if (end < 0) {
              end = 0
            }
          }

          const copy: T[] = activeArray.slice(start, end)

          for (let i: number = start; i < end; i++) {
            activeArray[target + i - start] = copy[i - start]!
          }

          return selectArray(activeArray)
        },
        fill: function (value: T, start: number = 0, end: number = activeArray.length) {
          start = Math.floor(start)
          if (start > activeArray.length) {
            start = activeArray.length
          }
          if (start < 0) {
            start = activeArray.length + start
            if (start < 0) {
              start = 0
            }
          }
          end = Math.floor(end)
          if (end > activeArray.length) {
            end = activeArray.length
          }
          if (end < 0) {
            end = activeArray.length + end
            if (end < 0) {
              end = 0
            }
          }

          for (let i: number = start; i < end; i++) {
            activeArray[i] = value
          }

          return selectArray(activeArray)
        },
        filter: function (this: T[], callback: (currentValue: T, index?: number, array?: T[]) => boolean, thisValue: any) {
          const filteredArray: T[] = []

          for (let i: number = 0; i < this.length; i++) {
            if (callback.call(thisValue, this[i]! )) {
              filteredArray.push(this[i]!)
            }
          }

          return selectArray(filteredArray)
        },
        flat: function (depth: number = 1) {
          depth = Math.floor(depth)
          if (depth < 0 || Number.isNaN(depth)) {
            depth = 0
          }

          let currentArray: T[] = activeArray

          for (let i: number = 1; i <= depth; i++) {
            const nextArray: T[] = []

            for (const item of currentArray) {
              if (!Array.isArray(item)) {
                nextArray.push(item)
              } else {
                for (const subItem of item) {
                  nextArray.push(subItem)
                }
              }
            }

            currentArray = nextArray

            if (!currentArray.some(item => Array.isArray(item))) {
              break
            }

          }


          return selectArray(currentArray)
        },
        flatMap: function (this: T[], callback: (currentValue: T, index?: number, array?: T[]) => T[], thisValue: any) {
          
        }
    }
}