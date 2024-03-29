let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

/* Write your code here */
const divcars = document.getElementById("cars")
for (var i = 0; i < cars.length; i++) {
	var div = document.createElement("div")
	div.className = "card"
	
	var car = document.createElement("img")
	car.className = "card"
	car.src = cars[i]['image_url']
	
	var str = document.createElement("p")
    str.innerHTML = cars[i]['brand'] + " " + cars[i]['model']      
	str.style = "margin: 3px; font-weight: 800; font-size: 95%;"

	var shop = document.createElement("img")
	shop.className ="cars basket"
	shop.src = "shopcart.png"
	shop.width= 30 
	shop.height = 30
	shop.dataset.status = "no"
	shop.dataset.price = cars[i]["price"]
	
	div.appendChild(shop)
	div.appendChild(car)
	div.appendChild(str)
	divcars.appendChild(div)
};

var basket = document.getElementsByClassName("basket")
for (var i = 0; i < basket.length; i++) {
	var index = i
	basket[i].addEventListener("click",function(event,index){
		if(event.currentTarget.dataset.status=="no"){
			var sum = parseInt(document.getElementById("sum").innerHTML)
			var item = parseInt(document.getElementById("items").innerHTML)
			event.currentTarget.src="dollar.png"
			event.currentTarget.dataset.status="yes"
			document.getElementById("sum").innerHTML=sum+parseInt(event.currentTarget.dataset.price);
			document.getElementById("items").innerHTML=item+1
		}
		else{
			var sum = parseInt(document.getElementById("sum").innerHTML)
			var item = parseInt(document.getElementById("items").innerHTML)
			event.currentTarget.src = "shopcart.png"
			event.currentTarget.dataset.status = "no"
			document.getElementById("sum").innerHTML = sum-parseInt(event.currentTarget.dataset.price);
			document.getElementById("items").innerHTML = item-1
		}
	})
};
