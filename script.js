let data = [
    { name: "john", age: 28, profession: "developer" },
    { name: "jane", age: 22, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((item)=>{
      item.profession =="developer" ? console.log(item) : null;
    })
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("enter name")
    let age = parseInt(prompt("enter age"))
    let profession = prompt("enter profession")
    data.push({name, age, profession})
    console.log(data)
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter((item)=>{
      return item.profession!="admin"
  })
  console.log(data)
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data2 = [
      { name: "rehan", age: 26, profession: "enginner" },
      { name: "prince", age: 23, profession: "professor" },
    ];
    let concatenateArray= data.concat(data2);
    console.log(concatenateArray);
  }

  // 5. Average Age
  function averageAge() {
    let sum=0;
    data.forEach((item)=>{
      sum+=item.age;
    })
    console.log(sum/data.length)
  }
  
  // 6. Age Check
  
  function checkAgeAbove25() {
    // data.forEach((item)=>{
    //   if(item.age>25){
    //     console.log("person with age 25 exits");
    //     break;
    //   }
    // })
    for(let i=0; i<data.length;i++){
      if(data[i].age>25){
        console.log("person with age 25 exits");
        break;
      }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfessionsarr = [];
    data.forEach((item)=>{
      if(!uniqueProfessionsarr.includes(item.profession)){
        uniqueProfessionsarr.push(item.profession)
      }
    })
    console.log(uniqueProfessionsarr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>{
      return a.age-b.age;
    })
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((item)=>{
      if(item.name=="john"){
        item.profession="manager"
      }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devcount = data.filter((item)=>{
      return item.profession="developer";
    }).length
    let admincount = data.filter((item)=>{
      return item.profession="admin";
    }).length
    console.log(`Developers: ${devcount} | Admins: ${admincount}`) 
  }