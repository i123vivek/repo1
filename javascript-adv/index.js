$(document).ready(()=>{
	$("#get-data").click(()=>{
		getAllData();
	})
});

let getAllData = ()=>{
	console.log("making request");
	$.ajax({
		type:"GET",
		dataType:"json",
		url: 'http://api.open-notify.org/astros.json',// doubt.
		success: (data) =>{
			console.log(data);
			let allPeople = data.people;
			for(person of allPeople){
				let tempRow= `<div class="row">
									<div class="col"> ${person.name}</div>
									<div class="col"> ${person.craft}</div>
							  </div>`
				$("#showData").append(tempRow);
			}
		},
		error: (data) =>{
			alert("some error occured")
		},
		beforeSend:() =>{
			alert("request is being made,please wait");
		},
		complete:() =>{
			alert("data fetched success");
		}
	});
}