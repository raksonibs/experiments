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