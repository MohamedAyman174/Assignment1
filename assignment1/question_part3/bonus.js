var createCounter = function(init) {
    const initialValue = init;
    let currentCount = init;
    return {
        increment: function() {
            currentCount += 1;
            return currentCount;
        },
        decrement: function() {
            currentCount -= 1;
            return currentCount;
        },
        reset: function() {
            currentCount = initialValue;
            return currentCount;
        }
    };
};
const counter1 = createCounter(5);
const output1 = [
    counter1.increment(), 
    counter1.reset(),     
    counter1.decrement()  
];
console.log("Example 1 Output:", output1); 

// Example 2:
const counter2 = createCounter(0);
const output2 = [
    counter2.increment(), 
    counter2.increment(), 
    counter2.decrement(), 
    counter2.reset(),     
    counter2.reset(),      
];
console.log("Example 2 Output:", output2); 
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */