var modal = document.getElementById("myModal");
var btn = document.getElementById("signupbtn");
var span = document.getElementsByClassName("close")[0];
document.getElementById("signUpModel").display = "none";
modal.style.display = "block";

function guestlogin() {
	window.location.href = 'dashboard.php';
}
document.getElementById("guestlogin").addEventListener("click", function () {
	window.location.href = 'dashboard.php';
});
document.getElementById("guest").addEventListener("click", function () {
	window.location.href = 'dashboard.php';
});
btn.onclick = function () {
	modal.style.display = "none";
	document.getElementById("signUpModel").style.display = "block";
}
document.getElementById("loginbtn").onclick = function () {
	modal.style.display = "block";
	document.getElementById("signUpModel").style.display = "none";
}
document.getElementById("loginbutton").addEventListener("click", function () {
	email = document.getElementById("email");
	password = document.getElementById("password");
	flag = 1;
	if (email.value === "") {
		document.getElementById("emailErr").innerText = "Please Enter Your Email";
		document.getElementById("emailErr").style.color = "red";
		email.style.color = "red";
		flag = 0;
	} else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
		document.getElementById("emailErr").innerText = "Please Correct Email id";
		document.getElementById("emailErr").style.color = "red";
		email.style.color = "red";
		flag = 0;
	} else {
		document.getElementById("emailErr").innerText = "  .";
		document.getElementById("emailErr").style.color = "#fff";
		email.style.color = "#000";
	}
	if (password.value === "") {
		document.getElementById("passErr").style.color = "red";
		password.style.color = "red";
		document.getElementById("passErr").innerText = "Please Enter Your password";
		flag = 0;
	} else {
		document.getElementById("passErr").innerText = " .";
		document.getElementById("passErr").style.color = "#fff";
		password.style.color = "#000";
	}
	if (flag === 1) {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			console.log(this.responseText);
			if (this.responseText == 1) {
				window.location.href = 'dashboard.php';
			} else {
				email.style.color = "red";
				document.getElementById("passErr").style.color = "red";
				password.style.color = "red";
				document.getElementById("passErr").innerText = "Sorry Invalid User Credential";
			}

		};

		function sendData() {

			xhr.open('POST', '../Controller/AbstractController.php');
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;
			var login = document.getElementById("loginbutton").innerHTML;
			xhr.send('email=' + email + '&password=' + password + '&loginsubmit=' + login);
		}
		sendData();
	}
});
document.getElementById("signupbutton").addEventListener("click", function () {
	name = document.getElementById("name");
	email = document.getElementById("email1");
	password = document.getElementById("password1");
	phone = document.getElementById("phone");
	phoneRegx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

	flag = 1;
	if (document.getElementById("name").value == "") {
		document.getElementById("sNameErr").innerText = "Please Enter Your Name";
		document.getElementById("sNameErr").style.color = "red";
		document.getElementById("name").style.color = "red";
		flag = 0;
	} else {
		document.getElementById("sNameErr").innerText = " .";
		document.getElementById("sNameErr").style.color = "#fff";
		document.getElementById("name").style.color = "#000";
	}
	if (email.value === "") {
		document.getElementById("sEmailErr").innerText = "Please Enter Your Email";
		document.getElementById("sEmailErr").style.color = "red";
		email.style.color = "red";
		flag = 0;
	} else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
		document.getElementById("sEmailErr").innerText = "Please Correct Email id";
		document.getElementById("sEmailErr").style.color = "red";
		email.style.color = "red";
		flag = 0;
	} else {
		document.getElementById("sEmailErr").innerText = "  .";
		document.getElementById("sEmailErr").style.color = "#fff";
		email.style.color = "#000";
	}
	if (password.value === "") {
		document.getElementById("sPassErr").style.color = "red";
		password.style.color = "red";
		document.getElementById("sPassErr").innerText = "Please Enter Your password";
		flag = 0;
	} else {
		document.getElementById("sPassErr").innerText = " .";
		document.getElementById("sPassErr").style.color = "#fff";
		password.style.color = "#000";
	}
	if (phone.value === "") {
		phone.style.color = "#red";
		document.getElementById("sPhoneErr").innerText = "Please Enter Your Phone Number";
		document.getElementById("sPhoneErr").style.color = "red";
		flag = 0;
	} else if (!(phoneRegx.test(document.getElementById("phone").value))) {
		phone.style.color = "#red";
		document.getElementById("sPhoneErr").innerText = "Invalid Phone Number";
		document.getElementById("sPhoneErr").style.color = "red";
		flag = 0;
	} else {
		phone.style.color = "#000";
		document.getElementById("sPhoneErr").innerText = " .";
		document.getElementById("sPhoneErr").style.color = "white";
	}
	if (flag == 1) {
		const xhr1 = new XMLHttpRequest();
		xhr1.onload = function () {
			console.log(this.responseText);
			if (this.responseText == 1) {
				document.getElementById("sNameErr").innerText = " .";
				document.getElementById("sNameErr").style.color = "#fff";
				document.getElementById("name").style.color = "#000";
				document.getElementById("sEmailErr").innerText = "  .";
				document.getElementById("sEmailErr").style.color = "#fff";
				email.style.color = "#000";
				document.getElementById("sPassErr").innerText = " .";
				document.getElementById("sPassErr").style.color = "#fff";
				password.style.color = "#000";
				name.value = email.value = password.value = phone.value = "";
				document.getElementById("sPhoneErr").style.color = "green";
				document.getElementById("sPhoneErr").innerText = "Aww!!! You have been Successfully Registered";
				document.getElementById("signUpModel").display = "none";
			} else {
				document.getElementById("sPhoneErr").style.color = "red";
				document.getElementById("sPhoneErr").innerText = "Sorry User this User Can'nt be Registered";
			}

		};

		function sendData1() {
			xhr1.open('POST', '../Controller/AbstractController.php');
			xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			var name = document.getElementById("name").value;
			var email = document.getElementById("email1").value;
			var password = document.getElementById("password1").value;
			var phone = document.getElementById("phone").value;
			var signup = document.getElementById("signupbutton").innerHTML;
			xhr1.send('name=' + name + '&email=' + email + '&password=' + password + '&phone=' + phone + '&signupsubmit=' + signup);
		}
		sendData1();
	}
});