// mutation = inplace changes to data or contained datastrcutres.
// immutability makes copy of data wheneverchange is required.
//prefers fist class functions that can be passed to algorthims returning new versions of existing data. favors composition!
// two typs of mutations, visible and invisble. visible modift data via apo and invisible is vice versa (ex: caching). invisible mutations are sideeffects.
// not only is data immutable, data strucutes themsevles suffer no changes once instanced.
var list1 = Immutable.List.of(1, 2);
// We need to capture the result through the return value:
// list1 is not modified!
var list2 = list1.push(3, 4, 5);
// when immutable, multithreading no longer a problem as data canot change so no locks eneded to synchorinze threads
// persistance becomes easier.
// copying is a constant time operation because just create a new reference to existing instance of data//value comparisons are optimized: certain instance is only equal to same reference so deep value cpomparisons become reference comparisons. known as interning.
// note strings in js are immutable. perform interning on them so at load ot JIT complitation simplifiy string comparions.
//js obviosuly is dynamic and weeakly typed language. but object.freeze() makes things immutable! it i shallow so child sattributes can still be modified. 

function deepFreeze(obj) {
    // Retrieve the property names defined on obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing self
    propNames.forEach(function(name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && prop !== null) {        
            deepFreeze(prop);
        }
    });

    // Freeze self (no-op if already frozen)
    return Object.freeze(obj);
}

// favours sideeffect free functions
// pure functions rely only on what is explicitly passed to them as argumetns to produce result and not rely on global states
var globalValue = 99;

// This function is impure: its result will change if globalValue is changed,
// even when passed the same values in 'a' and 'b' as in previous calls.
function sum(a, b) {
    return a + b + globalValue;
}

// sidefeect free pure functions creates referential transparency. a referentially transpareny function passed by sameset of parameters can be replaced at any point by its result knowing for certain no changes in computation as a whole
// results in reduced flexivbility wiht more constraints, allows for deep gains when comes to analysis and proofs
function add(a, b) {
    return a + b;
}

// The following call can be replaced by its result: 3. This is possible because
// it is referentially transparent. IOW, side-effect free and pure.
var r1 = add(1, 2); // r1 = 3;

//peresistence refers to possibility og keeping older versions of data when new version constructed.
// immutable data strucutres only copy the data that need to change. partially persistent supprot modifications on newest version and read-only operations on all previos versions. fully persesitent allow reading and writing on all versions of the data.
// persistent data favours garbage collection rather than reference counting or manual memory management. because every new change previous versions must be avaialbe, manual is dificult. reference count is an invisible change which is a sideeffect and bad. adding a reference to existing data becomes freeee
var list1 = Immutable.List.of(1, 2);
var list2 = list1.push(3, 4, 5);
var list3 = list2.unshift(0);
var list4 = list1.concat(list2, list3);

//lazy operations not perform work until results are actually required.immutaibility helps to make sure data desn't change from invocaton of laz loaded operation to its finish.
var oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8)
                              .filter(x => x % 2)
                              .map(x => x * x);
// Only performs as much work as necessary to get the first result
console.log(oddSquares.get(1)); // 9
// lazy is great because unnecessary values not computed
//
function plusOne(n) {
    return n + 1;
}
function plusTen(n) {
    return n + 10;
}

var list = [1,2,3,4,5,6,7,8,9,10];
var result = list.map(plusOne).map(plusTen);

// lazy can remove intermidate data srtucutes, making multiple loops into one single loop
// bad is the exact moment the expression gets evaluated stops being obvious. also spaceleaks: leaks result from stroing data to perfom a given computation in the future.

//composition allos for comibing diff functions into new powerful functions first class functions (functions treated as data passed to other functions_)
Immutable.Range(1, Infinity)
    .skip(1000)
    .map(n => -n)
    .filter(n => n % 2 === 0)
    .take(2)
    .reduce((r, n) => r * n, 1);
// does this break hungarian notation?

// certain operations and algs are ony efficient when mutation is avaible.
var list1 = Immutable.List.of(1,2,3);
var list2 = list1.withMutations(function (list) {
    list.push(4).push(5).push(6);
});

// disadavantges because no free meals. time complexity is differnt becase immutable's constrants. have good runtime charactersitcs when taking persistence requirements ex: single linked list becaomes insert O(N) whereas before was O(1)
// amortized analysis considers data strucutres as agroup of operations.
// good amoartized times may have worse run time while being better in general case.
// also data sctures play with CPU cache (in general localit for mutable strucutres is better when many write operations)
//Immutable data structures cause by nature spikes in memory usage. After each modification, copies are performed. If these copies are not required, the garbage collector can collect old pieces of data during the next collection. This results in spikes of usage as long as the old, unused copies of the data are not collected. In the case persistence is required, spikes are not present.
// As you may have noticed, immutability becomes pretty compelling when persistence is considered.

//Rendering React components can get a nice boost when using immutable data due to optimizations available to check for equality: when two objects share the same reference and you are sure the underlying object is immutable, you can be sure the data contained in it hasn't changed. As React re-renders objects based on whether they have changed, this removes the need for deep value checks.