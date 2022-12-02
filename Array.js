const validateArray = (arr) => {
    if(Array.isArray(arr) && arr.length > 0) {
        return true
    }
    throw new Error(`${arr} invalid`);
}
//BÀI 1 
const findMinNumbers = (arr) => {
    validateArray(arr)
    let min = arr[0]
    if(arr.length > 1 ){
        for (let i = 1 ; i<arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i]
            }
        }
    }
    return min 
}
console.log(findMinNumbers([2, 1, 3]))


//BÀI 2
const findSencondLargestNumber = (arr) => {
    validateArray(arr)
    if(arr.length >= 2 ) {
        arr.sort((preNum, nextNum) => nextNum - preNum)
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if(newArr.includes(arr[i])) continue  
            newArr.push(arr[i])     
        }
        return newArr[1]
    }
    return `Array length must be larger than 1`

}
console.log(findSencondLargestNumber([2, 1, 3, 4, 9, 5, 9]))


//BAI 3
const sortStudents = (arr) => {
    validateArray(arr)
    return arr.sort().reverse()
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

console.log('T' < 'N')


//BAI4
const totalNumber = () => {
    let sum = 0
    for (let i = 0; i < 100; i++) {
        if(i % 5 === 0) {
            sum += i
        }
    }
    return sum
}
console.log(totalNumber());



//BAI5
const surplus = (arr) => {
    validateArray(arr)
    const newArr = arr.reduce((array, number) => {
        return array.concat(number % 2)
    }, [])
    return newArr
}
console.log(surplus([3,5,7,8,6]));

//BAI6
const longestString = (arr) => {
    validateArray(arr)
    if(arr.length === 1) {
        console.log('true')
        return arr
    }
    const result = []
    arr.sort((prevNum, nextNum) => nextNum.length - prevNum.length)
    result.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].length === arr[0].length) result.push(arr[i])   
    }
    return result
}

console.log(longestString(['aba', 'aa', 'ad', 'c', 'vcd']))


//BAI7
const randomElement = (arr) => {
    validateArray(arr)
    max = arr.length -1
    const random = Math.floor(Math.random() * (max - 0) + 0)
    return {
        number: arr[random],
        index: random 
    }
}
console.log(randomElement([3, 7, 9, 11]))


//BAI8
const permutationRandom = (arr) => {
    validateArray(arr)
    const number1 = randomElement(arr) 
    let number2 = randomElement(arr) 
    console.log(number1, number2)
    validateArray(arr)
    do {
        number2 = randomElement(arr)
    }
    while (number1 === number2)
    [arr[number1.index], arr[number2.index]] = [arr[number2.index], arr[number1.index]]
    return arr
}
console.log(permutationRandom([3, 7, 9, 11]))


//BAI9
const findDuplicateElemnet = (arr1, arr2) => {
    validateArray(arr1)
    validateArray(arr2)
    const result = arr1.filter((element) => {
        return arr2.includes(element)
    })
    return result
}

console.log(findDuplicateElemnet([1, 2, 3, 5], [1, 2, 4, 3]))


//BAI10
const findDifferentElemnet = (arr1, arr2) => {
    validateArray(arr1)
    validateArray(arr2)
    const result = 
    arr1.filter((element) => {
        return !arr2.includes(element)
    }).concat(
        arr2.filter((element) => {
            return !arr1.includes(element)
        })
    )
    return result
}

console.log(findDifferentElemnet([1, 2, 3], [1, 2, 4]))


//BAI11
const getAllSubString = (str) => {
    if(typeof str === 'string') {
        let combinations = [];
        for (let i = 0; i < str.length; i++) { 
            for (let j = i + 1; j < str.length + 1; j++) {
                combinations.push(str.slice(i, j));
            }
        }
        return combinations;
    }  
    return `${str} is not a string`
}
console.log(getAllSubString('dog'))


//BAI12
const isIncrease = (arr) => {
    validateArray(arr)
    let check = true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) check = false
        break;
    }
    return check
}
console.log(isIncrease([3,5,6,6,8,9]))
    

//BAI13
const checkDecreaseArray = (arr) => {
    validateArray(arr)
    let check = true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) check = false
        break;
    }
    return check
}
const checkOddNumber = (arr) => {
    validateArray(arr)
    let check = true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 ) {
            check = false
            break;
        }
    }
    return check
}
const checkDecreaseOddNumber = (arr) => {
    return checkOddNumber(arr) && checkDecreaseArray(arr)
}
console.log(checkDecreaseOddNumber([9,7,5,3,1]))
console.log(checkDecreaseOddNumber([1,5,8,9,3]))
