// Apply a show/hide to #pswd_info on focus/blur on #pswd
$('#pswd').on('focus', function () {
  $('#pswd_info').show(1000);
});
$('#pswd').on('blur', function () {
  $('#pswd_info').hide(1000);
});
// on every key pressed "keyup"++least one number "123".match(/\d/) => true
$('#pswd').on('keyup', function () {
  const pwdValue = $('#pswd').val();
  const numberValid = pwdValue.match(/\d/); // REGEX

  if (numberValid) {
    $('#number').addClass('valid');
  } else {
    $('#number').removeClass('valid');
  }
});
//least one Capital letter .match(/[A-Z]/)
$('#pswd').on('keyup', function () {
  const capitalValue = $('#pswd').val();
  const capitalValid = capitalValue.match(/[A-Z]/);

  if (capitalValid) {
    $('#capital').addClass('valid');
  } else {
    $('#capital').removeClass('valid');
  }

});

//at least one letter .match(/[A-z]/)
$('#pswd').on('keyup', function () {
  const letterValue = $('#pswd').val();
  const letterValid = letterValue.match(/[A-z]/);

  if (letterValid) {
    $('#letter').addClass('valid');
  } else {
    $('#letter').removeClass('valid');
  }

});

//length >= 8

$('#pswd').on('keyup', function (){
  const lengthValue = $('#pswd').val();
  const lengthValid = lengthValue.length >= 8;

  if (lengthValid) {
    $('#length').addClass('valid');
  } else {
    $('#length').removeClass('valid');
  }

});

//On submit, Check that the password and passwordConfirm matches
/* $('input[type=submit]').click(function(e){
  if($("#pswd").val() =! ("#pswdConfirm").val() )
  {
 alert("please enter password");
  return false;
  console.log(input[type=submit]);
  }
  }); */

 $("#signUp").submit(function(){
   event.preventDefault();
   if ($("#pswd").val() != $("#pswdConfirm").val())
     {
         alert("password don't match, try again");
        return false;
     }
 })





// Gathering : checked the password value : $("#pswd").val()
// All cases to check
// at least one number "123".match(/\d/) => true
// at least one Capital letter .match(/[A-Z]/)
// at least one letter .match(/[A-z]/)
// length >= 8

// On submit, Check that the password and passwordConfirm matches
