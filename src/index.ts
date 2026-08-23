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
        }
    }
}