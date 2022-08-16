var username=document.getElementById("username");
var password=document.getElementById("password");
var confirmpassword=document.getElementById("confirmpassword");
var erreur;
if(username.value==null)
{
    erreur="Saisir votre user name";
    erreur.getElementById("erreur").innerHTML=erreur;
}
if(password.value==null)
{
    erreur="Saisir votre password";
    erreur.getElementById("erreur").innerHTML=erreur;
}
if(confirmpassword.value==null)
{
    erreur="Saisir votre confirm passwword";
    erreur.getElementById("erreur").innerHTML=erreur;
}