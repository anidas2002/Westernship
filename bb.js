
		function sendEmail() {

var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var mobile=document.getElementById('mobile').value;
var company=document.getElementById('company').value;
var subject=document.getElementById('subject').value;
var message=document.getElementById('message').value;



			Email.send({


				Host: "smtp.gmail.com",
				Username : "westernshiporg@gmail.com",
				Password : "Westernship1*",
				To : 'quotations@westernship.org',
				From : "westernshiporg@gmail.com",
				Subject : "Website Enquiry",
				Body : "New Enquiry"+"<br>"+"Name : "+name+"<br>"+"Email : "+email+"<br>"+"Mobile : "+mobile+"<br>"+"Company : "+company+
"<br>"+"Subject : "+subject+"<br>"+"Message : "+message


			})
			.then(function(message){
				alert("mail sent successfully")
document.getElementById('name').value='';
document.getElementById('email').value='';
document.getElementById('mobile').value='';
document.getElementById('company').value='';
document.getElementById('subject').value='';
document.getElementById('message').value='';

			});
		}
