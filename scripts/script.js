/*скрол от кнопки "Посмотреть автомобили" к разделу "Наш автопарк"*/
document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior:"smooth"});
}

/*скрол от кнопки "Забронировать" к разделу "Узнать цену и забронировать"*/
var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

/*В форме сделаем все поля обязательными к заполнению, чтоб появлялось сообщение*/
document.getElementById("price-action").onclick = function() {
    if(document.getElementById("name").value === "") {
        alert("Заполните поле имя");
    } else if(document.getElementById("phone").value === "") { 
        alert("Заполните поле телефон");
    }  else if(document.getElementById("car").value === "") { 
        alert("Заполните поле автомобиль");
    }   else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время");
    }
}
