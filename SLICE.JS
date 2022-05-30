//  to copy something from this line to that as given in line =slice//
 Array1=["A","B","C","D","E"]
 Array2=Array1.slice(1,3)
 console.log(Array1)
 console.log("slice answer");
 console.log(Array2);

 //  splice=to delete something as shown in line 13//

 Array1 = ["A", "B", "C", "D", "E"];
 console.log(Array1);
 Array1.splice(1, 3);
 Array1.splice(1, 3,"maira","fatima");
 console.log("splice answer");
 console.log(Array1);


 question="what is blockchain"
 //  same as slice but use in a para or a sentence but slic is used b/w words// 

 console.log(question.substring(0,9));
 
 //  to find the length of a something//
 console.log(question.length);
 
 //  to cut the gap b/w words//
 console.log(question.trim().length);

 //to remove/delete something//  
 console.log(question.split(","));
 console.log(question.split("a"));

 //  for small letters//  
 console.log(question.toLowerCase());

// for capital letters//
 console.log(question.toUpperCase());

