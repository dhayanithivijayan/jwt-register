<!DOCTYPE html>
<html>
<body>

<h2><center>Securing API Services Using JWT Tokens</center></h2>
<h2><center><div id='response'>Response...</div></center></h2>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js "></script>
<script>
$(document).ready(function(){
    $('#client').click(function(){
     
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
         
        /*
         * 'post_receiver.php' - where you will pass the form data
         * $(this).serialize() - to easily read form data
         * function(data){... - data contains the response from post_receiver.php
         */
        $.ajax({
            type: 'GET',
            url: 'gettoken.php'            
        })
        .done(function(data){
             
            // show the response
            $('#response').html(data);
             
        })
        .fail(function() {
         
            // just in case posting your form failed
            alert( "Posting failed." );
             
        });
 
        // to prevent refreshing the whole page page
        return false;
 
    });
	 $('#server').click(function(){
     
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
         
        /*
         * 'post_receiver.php' - where you will pass the form data
         * $(this).serialize() - to easily read form data
         * function(data){... - data contains the response from post_receiver.php
         */
        $.ajax({
            type: 'GET',
            url: 'getapi.php'
           
        })
        .done(function(data){
             
            // show the response
            $('#response').html(data);
             
        })
        .fail(function() {
         
            // just in case posting your form failed
            alert( "Posting failed." );
             
        });
 
        // to prevent refreshing the whole page page
        return false;
 
    });
});
</script>
</head>
<table align="center" cellspacing="200"> 
  <tr>
    <td><input id="client" type="image" src="https://static1.squarespace.com/static/58aabccb3e00be9b7ed4fd75/t/5ac63b122b6a287e50307cdd/1522940699814/V13+Views_small.png" alt="client" width="100" height="100"></td>
	<td><input id="server" type="image" src="https://cdn.pixabay.com/photo/2013/07/13/10/17/computer-156948__340.png" alt="client" width="100" height="100"></td>
   </tr>  
  
</table>

</body>
</html>

