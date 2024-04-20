<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $grade = $_POST["grade"];
    $section = $_POST["section"];
    $email = $_POST["Email"];
    $itemName = $_POST["ItemName"];
    $itemFoundDate = $_POST["ItemFoundDate"];
    $itemDescription = $_POST["ItemDescription"];
    
    // Handle file upload
    $target_dir = "uploads/"; // Directory where uploaded files will be saved
    $target_file = $target_dir . basename($_FILES["image-upload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    // Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["image-upload"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["image-upload"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["image-upload"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars( basename( $_FILES["image-upload"]["name"])). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }

    // Process the data (e.g., save it to a database)
    // Example: Save data to a MySQL database
    // $servername = "localhost";
    // $username = "your_username"; // Replace with your MySQL username
    // $password = "your_password"; // Replace with your MySQL password
    // $dbname = "your_database"; // Replace with your database name

    // Create connection
    // $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    // if ($conn->connect_error) {
    //     die("Connection failed: " . $conn->connect_error);
    // }

    // Prepare SQL statement
    // $sql = "INSERT INTO reports (name, grade, section, email, item_name, item_found_date, item_description, image_path)
    //         VALUES ('$name', '$grade', '$section', '$email', '$itemName', '$itemFoundDate', '$itemDescription', '$target_file')";

    // Execute SQL statement
    // if ($conn->query($sql) === TRUE) {
    //     echo "Report submitted successfully";
    // } else {
    //     echo "Error: " . $sql . "<br>" . $conn->error;
    // }

    // Close connection
    // $conn->close();
}
?>
