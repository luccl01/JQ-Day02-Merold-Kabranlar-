var family_obj = JSON.parse(family);

for (let i = 0; i < family_obj.length; i++) {
	$(`#album`).append(`<div id= "member${i}" class = "members" serri="${i}"><img src = '${family_obj[i].image}'<p></p></div>`);
	$(`#member${i}`).append(`<br><span>Name: ${family_obj[i].name}</span>`);
	$(`#member${i}`).append(`<br><span>Relation: ${family_obj[i].relation}</span>`);
}

$(`.members`).on('click', function(){
	let i = $(this).attr("serri");
	console.log(i);
	$(this).find("p").text(`Age : ${family_obj[i].age}`);
})
