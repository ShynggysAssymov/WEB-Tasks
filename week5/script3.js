document.getElementById("addStudent").addEventListener('click',function(){
	var bool = 'true'
	var Name = document.getElementById("name").value
	var Surname =document.getElementById("surname").value
	var Faculty = document.getElementById("faculty").value

	if (!Name) {
		document.getElementById("name").classList.add("error")                
		bool='false'
	}
	else document.getElementById("name").style.textDecoration
	
	if (!Surname) {
		document.getElementById("surname").classList.add("error")
		bool = 'false'
	}
	else document.getElementById("surname").classList.remove("error")

	if (bool =='true') {
		var table = document.getElementById("students")
		var row = table.insertRow(table.rows.length)

		var cell1 = row.insertCell(0)
		var cell2 = row.insertCell(1)
		var cell3 = row.insertCell(2)

		cell1.innerHTML = Name
		cell2.innerHTML = Surname
		cell3.innerHTML = Faculty
		
		document.getElementById("name").value=""
		document.getElementById("surname").value=""
		document.getElementById("faculty").value=""
	}
	});
