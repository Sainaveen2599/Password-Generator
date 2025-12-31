let lengthInputEle=document.getElementById("length");
let generateBtntEle=document.getElementById("generate");
let passwordEle=document.getElementById("password");
let copyBtnEle=document.getElementById("copy");
generateBtntEle.addEventListener("click",() =>
{
    // const length=Number(lengthInputEle.value);
    if(!lengthInputEle.value|| lengthInputEle.value <6){
        passwordEle.textContent="Please Enter a Strong password";
        return;
    }
    //This are the characters we will use in passsword
    const characters="abcdefghigklmnopqrstuvwyxyzABCDEFGHIJKLMNOPQRSTUVWXYX@!%$^&*()_";
    let password="";
    for(let i=0;i<lengthInputEle.value;i++){
        const randomIndex=Math.floor(Math.random()*characters.length);
        password+=characters[randomIndex];
    }
    passwordEle.textContent=password;
}

);
copyBtnEle.addEventListener("click", () =>
{
    const password=passwordEle.textContent;
    if(password===""|| password==="Please Enter a Strong password"){
        alert("Password is empty,we cant copy");
        return;
    }
    navigator.clipboard.writeText(password);
    alert("Password Copied Successfully")
});