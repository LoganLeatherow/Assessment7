const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// extraLargeArray insert 2.2480548 s append 7.5914 ms
// largeArray insert 12.4772 ms append 779.4 us
// mediumArray insert 271.6 us append 224.3 us
// smallArray insert 130.8 us append 261.5 us
// tinyArray insert 68.9 us append 162 us
// Looking at the data from each function, a few things are noticeable. With fewer integers the insert function is more efficient. But as the array is scaled to larger numbers, the time gets exponentially larger. 
// The append method is slower with fewer numbers but shows more scalability as the array grows. 