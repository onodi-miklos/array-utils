const selectArray = function <T,> (activeArray: T[]): Object {
    return {
        array: function (): T[] {
            return activeArray
        },
        at: function (index: number): T|undefined {
            return activeArray[index]
        },
        concat: function (arrays: T[][]): Object {
            for (const array of arrays) {
                for (const item of array) {
                    activeArray.push(item)
                }
            }
            return selectArray(activeArray)
        },
        // copyWithin: function (target: number, start: number = 0, end: number = activeArray.length): Object {

        // }
        
    }
}

export default selectArray