<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        body {
          background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6c4ce37238455.5739e1c9ef52c.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
        }
        form
        {
            text-align: center;
        }
        fieldset {
            display: block;
            margin-left: 2px;
            margin-right: 2px;
            padding-top: 0.35em;
            padding-bottom: 0.625em;
            padding-left: 0.75em;
            padding-right: 0.75em;
            border: 2px groove (internal value);
        }   
       
        </style>
        <br>
        <form>
            <fieldset style="border: 0ch;">
              <legend style="font-size: 30px;color:whitesmoke;font-family: Georgia, 'Times New Roman', Times, serif;padding-left:10px;border-style:solid;width:20%;border-color: green;border-radius: 5px"><b>BOOK A CALL</b></legend><br>
              <label for="fname" style="font-size: 20px;color:whitesmoke;" size="500" ><b>NAME</b></label><br>
              <input type="text" id="fname" name="fname" value="Zuber"width="200px" style="border-style:solid;width:40%;height: 20px;;border-color: green;border-radius: 10px" required><br>
              <label for="email" style="font-size: 20px;color:whitesmoke"><b>EMAIL</b></label><br>
              <input type="text" id="email" name="email" value="zuber@gmail.com" width="200px" style="border-style:solid;width:40%;height: 20px;border-color: green;border-radius: 10px" required><br>
              <label for="phone" style="font-size: 20px;color:whitesmoke"><b>PHONE</b></label><br>
              <input type="number" id="phone" name="phone" value="7975602048"width="200px" style="border-style:solid;width:40%;height: 20px;border-color: green;border-radius: 10px"required><br><br>
              <label for="birthdaytime" style="font-size: 20px;color:whitesmoke"><b>Time For Call</b></label><br>
              <input type="datetime-local" id="birthdaytime" name="birthdaytime" style="border-radius: 5px;border-style:solid;width:20%;height: 20px;border-color: green"required><br><br>
              <input type="submit" value="GET CALL" style="background-color:orangered;font-size: 30px;color: antiquewhite;border-radius: 25px;"id = "clicked">
            </fieldset>
          </form>
          <script>
          <script src="registration.js">

              document.getElementById("clicked").addEventListener("click",myFunction)
              function myFunction(event){
                  event.preventDefault()
                  //const l = document.getElementById("fname")
                  console.log(`Name is ${document.getElementById("fname").value}`)
                  console.log(`Email is ${document.getElementById("email").value}`)
                  console.log(`Phone Number is ${document.getElementById("phone").value}`)
                  console.log(`Time set for call is ${document.getElementById("birthdaytime").value}`)
                  
                  
              }
            
            </script>
        
              
        
</body>
</html>
