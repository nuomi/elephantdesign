<?php
$_POST['optin']=="true" ? $optin = "join": $optin = "not join";
$subject = "[art-life-studio.com] User Message";
$message = $_POST['message'];
$message .= "\r\n" . $_POST['title'] . " " . $_POST['name'] . " would like to know more about: " . $_POST['prefer'] . ", and he(she) chose to " . $optin . " the mail list.";
$headers =  "From: " . $_POST['name'] . '<' . $_POST['email'] . '>' . "\n" .
            "BCC: " . '<nuomiease@163.com>' . "\n" .
            "Reply-To: " . $_POST['name'] . '<' . $_POST['email'] . '>' . "\n" .
            "X-Mailer: PHP/" . phpversion();

if (mail('info@art-life-studio.com', $subject , $message , $headers)) {
    return "Message Sent";
}else {
    return "Sent failed; Please try it again later, or contact info@art-life-studio.com.";
}

?>
