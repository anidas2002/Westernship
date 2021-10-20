
		function sendEmail() {



			Email.send({


				Host: "smtp.gmail.com",
				Username : "westernshiporg@gmail.com",
				Password : "Westernship1*",
				To : 'anidas2002@gmail.com',
				From : "westernshiporg@gmail.com",
				Subject : "Website Enquiry",
				Body : "New Enquiry"


			})
			.then(function(message){
				alert("mail sent successfully")


			});
		}
