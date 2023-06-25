const data = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Anna'},
    {id: 1, name: 'Ivan'},
]

const uniqueArr = getUniqueObject(data)
console.log(uniqueArr)


function getUniqueObject(value) {
    return [...new Set(value.map(item => item.id))].map(id => value.find(item => id === item.id))
}
