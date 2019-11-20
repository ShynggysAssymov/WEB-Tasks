const candidats = document.getElementsByTagName("img")
for(let i = 0; i < candidats.length; i++) {
	candidats[i].addEventListener('click',function(event){
		let big = document.getElementsByTagName("img")[0]
		big.src = event.currentTarget.getAttribute("src")
})}
