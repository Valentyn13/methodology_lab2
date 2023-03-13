import { LinkedList } from "./LinkedList";


const list = new LinkedList<number>()

list.add(1)
list.add(2)
console.log(list.toArray()) // [1,2]

list.insert(1488,0)
console.log(list.toArray()) // [1488,1,2]

list.deleteAll(2)
console.log(list.toArray()) // [1488,1]

list.delete(1)
console.log(list.toArray()) // [1488]

list.add(15)
list.add(16)
list.add(16)
console.log(list.findFirst(16)) // 2
console.log(list.findLast(16)) // 3

const lis2 = new LinkedList<number>()
lis2.add(6)
lis2.add(6)
lis2.add(6)
list.extend(lis2)
console.log(list.toArray()) // [1488,15,16,16,6,6,6]

console.log(list.get(1)) // 15

console.log(list.length()) // 7

list.reverse()
console.log(list.toArray()) // [6,  6,  6,16, 16, 15,1488]

const clonedList = list.clone()
console.log(clonedList) // [6,  6,  6,16, 16, 15,1488]

list.clear()
console.log(list.toArray()) // []
