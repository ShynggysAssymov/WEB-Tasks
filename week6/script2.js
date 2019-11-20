let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

/* Write your code here */
const a = document.getElementById("countries")
for (var i = 0; i < countries.length; ++i) {
	var option = document.createElement("option")
	option.value = countries[i]
	option.innerHTML = countries[i]
	a.appendChild(option)
};

a.addEventListener("change",function(){
    var country = a.options[a.selectedIndex].value
    const b = document.getElementById("cities")
    b.innerHTML = ""
    var first = document.createElement("option")
    first.innerHTML = "Select city"
    b.appendChild(first)
    for (var i = 0; i < cities_by_country[country].length; i++) {
        var option = document.createElement("option")
        //option.value = cities_by_country[country][i]
        option.innerHTML = cities_by_country[country][i]
        b.appendChild(option)
    };
})
