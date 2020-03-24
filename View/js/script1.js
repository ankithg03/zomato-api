for (var i = 0; i < 5; i++) {
	document.getElementsByClassName("card")[i].addEventListener("click", function () {
		var id = this.id

		function sendData() {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var a = document.getElementById("collectionDisplay");
					document.getElementById("cityId").innerHTML = id;
					a.innerText = "";
					var collectionJSON = JSON.parse(xhttp.responseText);
					for (var j = 0; j < ((collectionJSON.collections).length); j++) {
						let main = document.createElement("div")
						main.setAttribute("id", "c" + ((collectionJSON.collections)[j].collection).collection_id);
						main.setAttribute("class", "collectionData");
						let divimg = document.createElement("img");
						divimg.setAttribute("src", "" + (collectionJSON.collections)[j].collection.image_url);
						main.appendChild(divimg);
						let divright = document.createElement("div")
						divright.setAttribute("class", "divright");
						main.appendChild(divright);
						let heading = document.createElement("h4");
						heading.setAttribute("class", "heading");
						heading.innerText = "" + (collectionJSON.collections)[j].collection.title;
						divright.appendChild(heading);
						let desc = document.createElement("h5");
						desc.setAttribute("class", "descrip");
						desc.innerText = "" + (collectionJSON.collections)[j].collection.description
						divright.appendChild(desc);
						let popupmain = document.getElementById("collectionDisplay");

						popupmain.appendChild(main);

						function getData() {
							var xhttp = new XMLHttpRequest();
							xhttp.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {
									var comments = JSON.parse(this.responseText);
									document.getElementById('commentSection').innerHTML = "";
									for (var i = 0; i < comments.length; i++) {
										if ((document.getElementById('cityId').innerText) == comments[i].cityId) {

											var oneComment = document.createElement("div")
											var userName = document.createElement("p");
											oneComment.setAttribute("class", "commentSection")
											var userHeading = document.createElement("div");
											userHeading.setAttribute("class", "userNameSection")
											var userNameHeading = document.createElement("p");
											userHeading.appendChild(userNameHeading);
											userNameHeading.innerText = "User:" + comments[i].userName;
											userNameHeading.setAttribute("class", "userNameInComment");
											userName.innerText = "" + comments[i].userEmail;
											userHeading.setAttribute("class", "userName");
											userHeading.appendChild(userName);
											userName.setAttribute("class", "userEmailInComment");
											var Comment = document.createElement("h4");
											Comment.setAttribute("class", "commentDesc");
											Comment.innerText = "" + comments[i].comment;
											oneComment.appendChild(userHeading)
											oneComment.appendChild(Comment);
											if (userEmail == comments[i].userEmail) {
												var del = document.createElement('button');
												del.setAttribute("class", "delbtn");
												del.setAttribute("id", "delbtn-" + comments[i].commentId);
												del.innerText = "Delete Comment";
												del.setAttribute("onclick", "delComment(" + comments[i].commentId + ")");
												oneComment.appendChild(del);

											}
											document.getElementById('commentSection').appendChild(oneComment);
										}
									}
								}
							};
							xhttp.open("POST", "../Controller/AbstractController.php", true);
							xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
							xhttp.send("getComment=true");
						}
						getData();


					}
					document.getElementById("CityPopUp").style.display = "block";
				}
			};
			xhttp.open("GET", "https://developers.zomato.com/api/v2.1/collections?city_id=%20" + id, true);
			xhttp.setRequestHeader('user-key', '049075c471d1a25736ac16ee403c9fed');
			xhttp.send();
		}
		sendData();
	});
}

function delComment(cid) {

	let xhttpdel = new XMLHttpRequest();
	xhttpdel.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			var comments = JSON.parse(this.responseText);
			document.getElementById('commentSection').innerHTML = "";
			for (var i = 0; i < comments.length; i++) {
				if ((document.getElementById('cityId').innerText) == comments[i].cityId) {

					var oneComment = document.createElement("div")
					var userName = document.createElement("p");
					oneComment.setAttribute("class", "commentSection")
					var userHeading = document.createElement("div");
					userHeading.setAttribute("class", "userNameSection")
					var userNameHeading = document.createElement("p");
					userHeading.appendChild(userNameHeading);
					userNameHeading.innerText = "User:" + comments[i].userName;
					userNameHeading.setAttribute("class", "userNameInComment");
					userName.innerText = "" + comments[i].userEmail;
					userHeading.setAttribute("class", "userName");
					userHeading.appendChild(userName);
					userName.setAttribute("class", "userEmailInComment");
					var Comment = document.createElement("h4");
					Comment.setAttribute("class", "commentDesc");
					Comment.innerText = "" + comments[i].comment;
					oneComment.appendChild(userHeading)
					oneComment.appendChild(Comment);
					if (userEmail == comments[i].userEmail) {
						var del = document.createElement('button');
						del.setAttribute("class", "delbtn");
						del.setAttribute("id", "delbtn-" + comments[i].commentId);
						del.innerText = "Delete Comment";
						del.setAttribute("onclick", "delComment(" + comments[i].commentId + ")");
						oneComment.appendChild(del);

					}
					document.getElementById('commentSection').appendChild(oneComment);
				}
			}
		}
	}
	xhttpdel.open('POST', '../Controller/AbstractController.php');
	xhttpdel.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	xhttpdel.send('delComment=true&cid=' + cid);
}
document.getElementById("postCommentbtn").addEventListener("click", function () {
	let xhr1 = new XMLHttpRequest();
	xhr1.onload = function () {
		var comments = JSON.parse(this.responseText);
		document.getElementById('commentSection').innerHTML = "";
		for (var i = 0; i < comments.length; i++) {
			if ((document.getElementById('cityId').innerText) == comments[i].cityId) {
				var oneComment = document.createElement("div")
				var userName = document.createElement("p");
				oneComment.setAttribute("class", "commentSection")
				var userHeading = document.createElement("div");
				userHeading.setAttribute("class", "userNameSection")
				var userNameHeading = document.createElement("p");
				userHeading.appendChild(userNameHeading);
				userNameHeading.innerText = "User:" + comments[i].userName;
				userNameHeading.setAttribute("class", "userNameInComment");
				userName.innerText = "" + comments[i].userEmail;
				userHeading.setAttribute("class", "userName");
				userHeading.appendChild(userName);
				userName.setAttribute("class", "userEmailInComment");
				var Comment = document.createElement("h4");
				Comment.setAttribute("class", "commentDesc");
				Comment.innerText = "" + comments[i].comment;
				oneComment.appendChild(userHeading)
				oneComment.appendChild(Comment);
				if (userEmail == comments[i].userEmail) {
					var del = document.createElement('button');
					del.setAttribute("class", "delbtn");
					del.setAttribute("id", "delbtn-" + comments[i].commentId);
					del.innerText = "Delete Comment";
					del.setAttribute("onclick", "delComment(" + comments[i].commentId + ")");
					oneComment.appendChild(del);
				}
				document.getElementById('commentSection').appendChild(oneComment);
			}
		}
	};

	function sendData1() {
		xhr1.open('POST', '../Controller/AbstractController.php');
		xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		var comment = document.getElementById("comment").value;
		var cid = document.getElementById("cityId").innerText;
		var postbtn = "postCommentbtn";
		xhr1.send('comment=' + comment + '&cid=' + cid + '&postbutton=' + postbtn);
	}
	sendData1();
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	document.getElementById("CityPopUp").style.display = "none";
}
if (document.getElementById("signupbt").innerText == "Hello Guest") {
	document.getElementById("onerow").style.display = "none";
}