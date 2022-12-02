let user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};

//BAI1
console.log(Object.keys(user))


//BAI2
console.log(Object.values(user))


//BAI3
console.log(user.hasOwnProperty('property1'))


//BAI4
console.log(Object.keys(user).length)


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