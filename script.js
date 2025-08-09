// 1st thing to be VALIDATE::
//now there are 2 ways to make the field (taki user khali na Chode)..Chode
// 1). using the html (required attribute)
// 2). using the javascript

//2ND thing to be vaLIDATE::
 // HME EK PARTICULAR TYPE KRNA HOGA HR EK FIELD KO TO ENSURE BEFORE SUBMIT(so we will use the re
 //regular expressioon ,,jo ki kisi pattern ko match krnae k liye help krta h)

//  3rd thing (agr galat type dal rhe field me to submit nhi hone dena h)
//    to return krenge from where we are calling ,,,true hoga tbi submit hoga

// 4th: thing we need to check the length of phone ,,,and use regular expression for email

function validateForm(){
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('phone').value
  // RegExp is the constructor jo ki object create krke dega object ka ,,,
    let regExName=new RegExp(/^\d/)
    let regExEmail=new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/)
    //   here /w (includes alphabets,numbers,underscore),,last me i.e .com atleast 2 minimum alphabet hone chiya
    if(name==""){
        alert("name field can't be empty");
        return false;
    }
   else if(email==""){
        alert(" email field can't be empty");
        return false;
    } 
    else if(phone==""){
        alert("phone no. field can't be empty");
        return false;
    }
   else if(regExName.test(name)){
       alert("it can't contain the digits..");
       return false;
   }
   else if(phone.length!=10){
    alert("input phone no. is invalid");
    return false;
}
else if(!regExEmail.test(email)){
    alert("input email is invalid ,try again");
    return false;
}

  

// ✅ If everything is valid, show success message and clear form
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('phone').value = "";
// ✅ Bilkul sahi samjha tumne! 👏
// Yes — tumhara validateForm() function ke last me success message wali line likhi gayi hai, isliye
//  voh tabhi chalegi jab poora function successfully run ho jaye, i.e.
document.getElementById("successMsg").innerText = "Form submitted successfully!";


return false; // 🔴 To stop actual form submission for now (page reload)(mtlb page browse pr output to dikayega par
// server par save nhi honga )


  



 }
 // ha ha ha interese k liye add kr rhe
function toggleMode() {
    document.body.classList.toggle("dark");
  }