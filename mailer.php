<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name1 = strip_tags(trim($_POST["name1"]));
				$name1 = str_replace(array("\r","\n"),array(" "," "),$name1);
        $email1 = filter_var(trim($_POST["email1"]), FILTER_SANITIZE_EMAIL);
        $message1 = trim($_POST["message1"]);

        // Check that data was sent to the mailer.
        if ( empty($name1) OR empty($message1) OR !filter_var($email1, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient1 = "ahmadulwann@gmail.com";

        // Set the email subject.
        $subject1 = "New contact from $name1";

        // Build the email content.
        $email_content1 = "Name: $name1\n";
        $email_content1 .= "Email: $email1\n\n";
        $email_content1 .= "Message:\n$message1\n";

        // Build the email headers.
        $email_headers1 = "From: $name1 <$email1>";

        // Send the email.
        if (mail($recipient1, $subject1, $email_content1, $email_headers1)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>