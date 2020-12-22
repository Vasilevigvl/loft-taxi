function * gen() {
  console.log("Start")
  const value1 = yield("Что-то другое");
  console.log("First value", value1)
  const value2 = yield;
  console.log('Second value', value2)
  console.log("Finish")
}

const iter = gen() // {next: function() {}}

console.log(iter.next()) // {value: "first yield value", done: false}
console.log(iter.next("stop")) // {value: undefined, done: false}
// console.log(iter.next("Outside value 2"))
// console.log(iter.next("test"))