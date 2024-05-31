//get key and value and set thats to Ls
function setDataToLs(key = "", value) {
  localStorage.setItem(key, value);
}

//export setDataToLs function
export { setDataToLs };
