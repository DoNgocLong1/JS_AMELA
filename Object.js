let user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};
const validateArray = (obj) => {
    if( typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        return true
    }
    throw new Error(`${obj} invalid`);
}
//BAI1
const getKeys = (obj) => {
    validateArray(obj)
    return Object.keys(obj)
}
console.log(getKeys(user))


//BAI2
const getValues = (obj) => {
    validateArray(obj)
    return Object.values(obj)
}
console.log(getValues(user))


//BAI3
const checkProperty = (obj, arr) => {
    validateArray(obj)
    return obj.hasOwnProperty(arr)
}
console.log(checkProperty(user,'property1'))


//BAI4
const checkObjectLength = (obj) => {
    validateArray(obj)
    return getKeys(obj).length
}
console.log(checkObjectLength(user))


//BAI5
const members = [
    {
        name : "Nguyễn Tiến Đạt",
        age : 25,
        email : 'support@amela.vn'
    },
    {
        name : "Đỗ Ngọc Long",
        age : 21,
        email : 'long@amela.vn'
    },
    {
        name : "Huy",
        age : 24,
        email : 'huy@amela.vn'
    },
    {
        name : "Mạnh",
        age : 25,
        email : 'manh@amela.vn'
    },
    {
        name : "Tân",
        age : 27,
        email : 'tan@amela.vn'
    },
]

const searchMembers = (arr) => {
    const result = arr.filter((member) => {
        return member.age === 25
    })
    return result
}
console.log(searchMembers(members))