

<?php

if($_POST["submit"]) {
    $recipient="ahmadulwann@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["senderName"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $senderName\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $senderName <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>