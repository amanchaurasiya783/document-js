/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr1 = [
  { id: 4, name: "Smith", age: "54", profession: "developer" },
  { id: 5, name: "Jill", age: "165", profession: "admin" },
  { id: 6, name: "Friday", age: "195", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((array) => {
    if(array.profession == "developer"){
      console.log(array);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((array) => {
    if(array.profession == "developer"){
      console.log(array);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push(
    {
      id:4,
      name:"susan",
      age:"20",
      profession:"intern"
    }
  )
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArray = arr.filter((obj) =>{
    return obj.profession !== "admin";
  })
  console.log(newArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  console.log(arr.concat(arr1));
}
