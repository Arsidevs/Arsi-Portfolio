<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Make sure path is correct

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!$email) {
        die('Invalid email address.');
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP config
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ronaldcristiandayuta@gmail.com'; // Your Gmail
        $mail->Password   = 'pkiy ertb hyon enee';    // Your Google App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Sender and recipient
        $mail->setFrom($email, $name); // From the sender's email (person who filled the form)
        $mail->addAddress('ronaldcristiandayuta@gmail.com', 'Ronald Cristian Dayuta'); // Your email to receive messages

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New message from portfolio contact form";
        $mail->Body    = "<b>Name:</b> $name <br><b>Email:</b> $email <br><b>Message:</b><br>$message";

        $mail->send();
        echo "Message sent! Thank you for contacting me.";
    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request";
}
