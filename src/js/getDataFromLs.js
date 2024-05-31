//get any key and check ls has key or no and return data
function getDataToLs(key = "") {
  let data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return "none";
}

//export getDataLs function
export { getDataToLs };
