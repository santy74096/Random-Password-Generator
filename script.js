function generate_password(){

    let num="0123456789";
    let lc="abcdefghijklmnopqrstuvwxyz";
    let uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sym="!@#$%^&*(){}?<>~.";

    let pass_length=document.getElementById("length_of_password").value;
    // console.log(num_input);
    let num_checked=document.getElementById("number"); 
    let lc_checked=document.getElementById("lowercase");
    let uc_checked=document.getElementById("uppercase");
    let sym_checked=document.getElementById("symbols");

    let tmp="";
    if(num_checked.checked == true)
        tmp+=num;
    if(lc_checked.checked == true)
        tmp+=lc;
    if(uc_checked.checked == true)
        tmp+=uc;
    if(sym_checked.checked == true)
        tmp+=sym;

    // console.log(tmp);

    let password="";
    for(let i=0;i<pass_length;i++)
    {
        let randomNumber=Math.floor(Math.random() * tmp.length);
        password+=tmp.substring(randomNumber,randomNumber+1);
        document.getElementById('screen').value=password;
    }
}