 
 // BÀI 1
const checkStringExist =(str1, str2) => {
    if( typeof str1 === 'string' && typeof str2 === 'string') {
        /* return str1.split(' ').includes(str2) */

        let arr = str1.split(' ')
        for(i = 0; i < arr.length; i++) {
            if(arr[i] === str2) {
                return true
            }
        }
        return false
    }
    return'arr1 or arr2 not a string'
 }
 console.log(checkStringExist("Amela A Beta", "Beta"))
 console.log(checkStringExist("Amela A Beta", "B"))


 //BÀi 2
const shortenString = str => {
    /* return `${str.slice(0,8)}...` */
    let result = ''
    for( let i = 0; i < 8; i++) {
        result += str[i]
    }
    return `${result}...`
}
console.log(shortenString('Xin chào các bạn'))


//BÀI 3 
const repeatString1 = str => {
    if( typeof str === 'string'){
        /* return str.repeat(10) */

        let result = ''
        for(i = 0; i < 10; i++){
            result+=str
        }
        return result
    }
    return `${str} is ${ typeof str} type` 
}
console.log(repeatString1('a'))


//BÀI 4
const repeatString2 = str => {
    if( typeof str === 'string'){
        /* let result = str+"-"
        return (result.repeat(10)).slice(0, -1); */
        let result = ''
        for(i = 0; i < 10; i++){
            result+=`${str}-`
        }
        return result.slice(0, -1)

    }
    return `${str} is ${ typeof str} type`
}
console.log(repeatString2('ab'))


//BÀI 5
const repeatString3 = (str, n) => {
    if( typeof str === 'string'){
        /* let result = str+"-"
        return (result.repeat(n)).slice(0, -1); */

        let result = ''
        for(i = 0; i < n; i++){
            result+=`${str}-`
        }
        return result.slice(0, -1)
    }
    return `${str} is ${ typeof str} type`
}
console.log(repeatString3('ab', 5))

//BÀI6
const reserverString = str => {
    if( typeof str === 'string') {
        return str.split('').reverse().join('')
    }
    return `${str} is ${ typeof str} type`
}
console.log(reserverString('hello'))


//BÀI7
const symmetricString = str => {
    if( typeof str === 'string') {
        let newStr = str.split(' ').join('')
        let reverse = newStr.split('').reverse().join('')
        return newStr === reverse
    }
    return `${str} is ${ typeof str} type`
}
console.log(symmetricString('race car'))
console.log(symmetricString('hello word'))


//BÀI8
const checkUpperCase = str => {
    
    if( typeof str === 'string') {
        for(i = 0; i < str.length; i++){
            if(str[i] !== str[i].toUpperCase()) {
               return false
            }
        }
        return true
    }
    return `${str} is ${ typeof str} type`
}
console.log(checkUpperCase('CASE'))
console.log(checkUpperCase('case'))