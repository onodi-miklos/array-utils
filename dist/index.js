export function selectArray(activeArray) {
    return {
        array: function () {
            return activeArray;
        },
        at: function (index) {
            return activeArray[index];
        },
        concat: function (arrays) {
            for (const array of arrays) {
                for (const item of array) {
                    activeArray.push(item);
                }
            }
            return selectArray(activeArray);
        },
        copyWithin: function (target, start = 0, end = activeArray.length) {
            target = Math.floor(target);
            if (target > activeArray.length) {
                target = activeArray.length;
            }
            if (target < 0) {
                target = activeArray.length + target;
                if (target < 0) {
                    target = 0;
                }
            }
            start = Math.floor(start);
            if (start > activeArray.length) {
                start = activeArray.length;
            }
            if (start < 0) {
                start = activeArray.length + start;
                if (start < 0) {
                    start = 0;
                }
            }
            end = Math.floor(end);
            if (end > activeArray.length) {
                end = activeArray.length;
            }
            if (end < 0) {
                end = activeArray.length + end;
                if (end < 0) {
                    end = 0;
                }
            }
            const copy = activeArray.slice(start, end);
            for (let i = start; i < end; i++) {
                activeArray[target + i - start] = copy[i - start];
            }
            return selectArray(activeArray);
        }
    };
}
const testArray = [3, 5, 7, 9, 11, 13, 15, 17];
console.log(selectArray(testArray).copyWithin(2, -3, -1).array());
//# sourceMappingURL=index.js.map