// pure - no side effects
const add10 = (a) => a + 10

//impure - side effects and external dependencies
let x = 10
const addx = (a) => a + x
const setx = (v) => x =v

// pure bound congnitive load of program (ie only concern about body of function)

// allows for composition 
const add1 = (a) => a + 1
const times2 = (a) => a * 2
const compose = (a, b) => (c) => a(b(c))
const add10Times2 = compose(add1, times2)
add10Times2(5) // 11

// composition is better alternative to oriented inheretance. example below
const formalGreeting = (name) => `Hello ${name}`
const casualGreeting = (name) => `Sup ${name}`
const male = (name) => `Mr. ${name}`
const female = (name) => `Mrs. ${name}`
const doctor = (name) => `Dr. ${name}`
const phd = (name) => `${name} PhD`
const md = (name) => `${name} M.D.`
formalGreeting(male(phd("Chet"))) // => "Hello Mr. Chet PhD"

const identity = (x) => x
const greet = (name, options) => {
  return pipe([
    // greeting    
    options.formal ? formalGreeting :
    casualGreeting,
    // prefix
    options.doctor ? doctor :
    options.male ? male :
    options.female ? female :
    identity,
    // suffix
    options.phd ? phd :
    options.md ?md :
    identity
  ])(name)
}

//tracing errors is easier. when get error, stack trace through functions. in oop, confusing because don't know the state of the rest of the object 
// R is ramda.js
//function currying: call a function with fewer arguments than it wants and function returns another function to accept the rest of the arguments 
const add = R.curry((a, b) => a + b)
add(1, 2) // => 3
const add1 = add(1)
add1(2) // => 3
add1(10) // => 11

const users = [{name: 'chet', age:25}, {name:'joe', age:24}]
R.pipe(
  R.sortBy(R.prop('age')), // sort user by the age property
  R.map(R.prop('name')),   // get each name property
  R.join(', '),            // join the names with a comma
)(users)
// => "joe, chet" -> becomes way more declarative

// monads, functors, etc a container for a value, and to open it need to map over
list = [-1,0,1]
list.map(inc) // => [0,1,2]
list.map(isZero) // => [false, true, false]

// benefit of being used in category theory so get some great identities and proof for code. ex: glasgow haskell compilter
//ex: 
list.map(inc).map(isZero) // => [true, false, false]
list.map(compose(isZero, inc)) // => [true, false, false]

// when map compiles, O(n). but second version is twice as performant because pointer to next item work is done.

// maybe Monday. to make null, need to wrap in a monad so compilter knows. Maybe monad is union type that's either Nothing or Just Something. ex:
type Maybe = Nothing | Just x //where x is any other type

// being a monad, map over Maybe to change value. ex:
const x = Maybe.Just(10)
const n = x.map(inc)
n.isJust() // true
n.value() // 11
const x= Maybe.Nothing
const n = x.map(inc) // no error!
n.isNothing // true 

// big up for using such types. the type system and compiler enforces program run without runtime errors.

// referential transparency: hard to analyze hwen logical programs when two things that are the same aren't equal to each other. ex:
{} == {} // false
[] == [] // false
[1,2] == [1,2] // false

// what should matter is only value, not reference pointer. thus functional programming resots to deep equals and refrential transparency. not performant, but makes quicker
// functional programming cannot mutate a variable without changing its reference, (or it would be impure).
// since can't mutate values, have to copy into a new memory location everytime want to change and results in perofrmance loss and garabge trhasing. but solution is using structural sharing (or persistant strucutres)
// an example is a linked list.  example is React uses immutable props and state and sees if referenttial euqal and next stops and props before unnecuerrailty rendering.

// lazy evulation covers thinks and generators. don't do something until ahave to.
// most programs use innermost reduction ex:
square(3 + 4)
square(7) // evaluated the innermost expression
7 * 7
49
// vs outermost
square(3 + 4)
(3 + 4) * (3 + 4) // evaluated the outermost expression
7 * (3 + 4)
7 * 7
49
// haskel keeps a reference to each expression and shares references as they're passed down to parent expreosions through otermost reduction. So:
square(3 + 4)
(3 + 4) * (3 + 4) // evaluated the outermost expression
7 * 7 // both reduced at the same time due to reference sharing
49
// thus lazy loading is outermost evalaution with reference sharing
// in JS, need to use arrays as functions. ex:
const makeOnes = () => {next: () => 1}
ones = makeOnes()
result.next() // => 1
result.next() // => 1
// infinte natural numbers
const makeNumbers = () => {
  let n = 0
  return {next: () => {
    n += 1
    return n
  }
}
numbers = makeNumbers()
numbers.next() // 1
numbers.next() // 2
numbers.next() // 3
// in es2015 called function generators:
function* numbers() {
  let n = 0
  while(true) {
    n += 1
    yield n 
  }
}

// in clojure have referential transparency, immutable data types, and cannot mutate variables except for special transational types called atoms. 
// everything is a primitive data tyoe called EDN (like JSON)
// in clojue, eveyhing is data. list processing.