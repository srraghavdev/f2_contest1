/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(function (val){
    if(val.profession==='developer'){
      console.log(val)
    }
  })
}

function PrintDeveloperbyForEach() {
 arr.map( function (val) {
  if(val.profession==="developer"){
    console.log(val)
  }
 })
}

function addData() {
  let obj={
    id:arr.length+1,
    name:'susan',
    age:'20',
    profession: 'intern'
  }
  arr.push(obj)
  console.log(arr)
}

function removeAdmin() {
 let f= arr.filter(function (val){
  if(val.profession !== "admin"){
    return val
  }
 })
 console.log(f)
}

function concatenateArray(){ 
  let h=[
    { id:arr.length+1,
      name:'shivansh',
      age: 23,
      profession: 'developer'
    },
    { id:arr.length+2,
      name:'manish',
      age: 27,
      profession: 'data analyst'
    },
    { id:arr.length+3,
      name:'aman',
      age: 30,
      profession: 'doctor'
    }
  ]
  let newarr= arr.concat(h)
  console.log(newarr)
}
