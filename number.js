//BÀI1 
const spheraVolume = (num) => {
    if(typeof num == 'number') {
        let volume = 0
        volume = (4/3)*Math.PI*num*num*num;  
        return volume
    }
    return `${num} is ${ typeof num} type` 
}
console.log(spheraVolume(5))


//BÀI2
const totalNumbersBetweenTwoNumbers = (num1, num2) => {
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        let sum = 0
        for (let i = num1 + 1; i < num2; i++) {
            sum += i
        }
        return sum
    }
    return 'num1 or num2 not a string'
}
console.log(totalNumbersBetweenTwoNumbers(3, 8))


//BÀI 3 
function checkPrimeNumber(num)
{
    if(typeof num == 'number'){
        var check = true;
        if (num < 2){
            check = false;
        }
        else{
            for (let i = 2; i < num-1; i++)
            {
                if (num % i == 0){
                    check = false;
                    break;
                }
            }
        }
        return check
    }
    return `${num} is ${ typeof num} type` 
}

console.log(checkPrimeNumber(9))


//BÀI 4
const totalNumbers = num => {
    if(typeof num == 'number') {
        let sum = 0
        for(let i = 0; i <= num; i++){
            if(checkPrimeNumber(i)) {
                sum += i
            }    
        }
        return sum
    }
    return `${num} is ${ typeof num} type` 
}
console.log(totalNumbers(13))

//BÀI 5
const totalDivisorOfNumber = num => {
    if(typeof num == 'number') {
        let s = 0
        for(let i = 1; i <= num; i++)
        {
        if(num % i == 0)
            {
            s = s + i;
            }
        }
        return s
    }
    return `${num} is ${ typeof num} type`
}
console.log(totalDivisorOfNumber(15))


//BÀI 6
const sortToMinNumber = num => {
    
    if(typeof num == 'number') {
        // initialize frequency of each digit to Zero
        let freq = Array(10).fill(0);
        // count frequency of each digit in the number
        while (num)
        {
            let d = num % 10; // extract last digit
            freq[d]++; // increment counting
            num = parseInt(num / 10); //remove last digit
        }
    
        // Set the LEFTMOST digit to minimum expect 0
        let result = 0;
        for (let i = 1 ; i <= 9 ; i++)
        {
            if (freq[i])
            {             
                result = i;
                console.log(result)
                freq[i]--;
                break;
            }
        }
    
        // arrange all remaining digits
        // in ascending order
        for (let i = 0 ; i <= 9 ; i++)
            while (freq[i]--)
                result = result * 10 + i;
    
        return result;
    }
    return `${num} is ${ typeof num} type` 
}
console.log(sortToMinNumber(900756))