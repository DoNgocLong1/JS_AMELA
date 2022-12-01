function compute (numA, numB, operator) {
    switch(operator) {
        case add : 
            return numA + numB
        case minus :
            return numA - numB
        case div:
            numB === 0  ? 'b is 0' : numA / numB
        case multi :
            return numA * numB
        default: 'operator not found'
    }
}
