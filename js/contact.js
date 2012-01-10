
$('.error').hide();

$('.text-input').css({backgroundColor:"#FFFFFF"});

$('.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
});

$('.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
});

$("form").submit(function(event){
    $('.error').hide();

    var title = $("#title").val();

    var name = $("#name").val();
    if (name == "") {
        $("label#name_error").show();
        $("input#name").focus();
        return false;
    }

    var email = $("input#email").val();
    if (email == "") {
        $("label#email_error").show();
        $("input#email").focus();
        return false;
    }

    preferString = "";
    $("#prefer:checked").each(function(index){
        preferString += $(this).val() + " ";
    });
    //preferString = preferString.replace(/(^\s*)(\s*$)/g);


    var message = $("textarea#message").val();

    var optin = "";
    $("input#maillist").is(':checked') ? optin="true" : optin="false";

    var dataString = 'title='+title+'&name='+name+'&email='+email+'&prefer='+preferString+'&message='+message+'&optin='+optin;

    //alert(dataString);

    //$.post("mail.php", $("form").serialize(), function(data){ alert(data); });
    $.ajax({ type:'POST', url:'mail.php', data: dataString, success: function(data){ alert(data); }, });
});
