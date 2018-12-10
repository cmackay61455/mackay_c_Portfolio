<?php
echo "hello";
function send_email() {
    $name = 'name: '.$_POST['name'];
    $email = 'from: '.$_POST['email'];
    $message = 'commens: '.$_POST['comments'];


        if(isset($name, $email, $message)){
            echo "name: ".$name. ", email: ".$email. ", message: ".$message;
        }

        header('Location: http://localhost:8888/portfolio?success=yes!');
        mail($to, $subject, $message, $headers);
        //uncomment above when website is up
    }

header("Access-Control-Allow-Origin: *");
 header('Content-Type:application/json;charset=UTF-8');
send_email();
    

?>