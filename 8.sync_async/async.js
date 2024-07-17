function first() {
    console.log('first() called');
}

function second() {
    console.log('second() called');
}

function someLongWork() {
    console.log('some long work..');
}

setTimeout(()=>{
   first, 3000 
})

second();