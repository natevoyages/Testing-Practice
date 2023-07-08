const analyzeArrray = (arr) =>{
    const getAverage = (arr) => {
        let sum = arr.reduce((prev, cur) => prev + cur, 0);
        return sum/arr.length;
    }
    const getMin = (arr) => {
        let min = arr[0];
        for(let i = 1; i < arr.length; i++){
            if (min > arr[i]){
                min = arr[i];
            }
        }
        return min;
    }
    const getMax = (arr) => {
        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
            if (max < arr[i]){
                max = arr[i];
            }
        }
        return max;
    }
    let average = getAverage(arr);
    let min = getMin(arr);
    let max = getMax(arr);
    let length = arr.length;

    return{ average, min, max, length};
}

export{analyzeArrray};