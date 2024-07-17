function a( callback ) {
    setTimeout(() => {
        console.log('A');
        callback();
    }, 1000);
}

a(()=>console.log('A is Done'))