function a() {
  setTimeout(() => {
    console.log("a() called"), 1000;
    console.log("a() is done");
    setTimeout(() => {
      console.log("b() called");
      console.log("b() is done");
      setTimeout(() => {
        console.log("c() called");
        console.log("c() is done");
      }, 1200);
    }, 500);
  });
}


a()