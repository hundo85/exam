function _load() {
  function clickEvent() {
    //ez is mukodik, ha a css-ben le van kezelve a #nav #open elemeken a clicked class name
    //document.getElementById("open").classList.toggle("clicked");
    //document.getElementById("nav").classList.toggle("clicked");

    document.querySelector("body").classList.toggle("clicked");
  }

  document.getElementById("open").addEventListener("click", clickEvent);
  // const data = (_) => "x";
  // console.log(data());

  /*   const arr = [1, 2, 3];
  arr.splice(1, 0, 4);
  console.log(arr); */

  const user = {
    firstName: "John",
    lastName: "Doe",
    speak() {
      const logger = () => {
        console.log(this);
      };
      logger();
    },
  };
  user.speak();
}

window.addEventListener("load", _load);
