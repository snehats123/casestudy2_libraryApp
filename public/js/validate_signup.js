function val_mail()
{
    var pass1=document.getElementById('email').value;
}
function val_password()
{
    var pass1=document.getElementById('password').value;
    var pass2=document.getElementById('repassword').value;

    if(pass1=='' || pass2=='')
    {
        alert("field can not be empty!");
        return false;
    }
    else if(pass1 == pass2)
    {
        
        return true;
    }
    else
    {
        alert("Password doesnt match");
        return false;
    }
        
}
function val_mobno()
{

}