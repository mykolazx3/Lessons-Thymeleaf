let stompClient = null;
// подключаемся к серверу по окончании загрузки страницы
window.onload = function () {
    connect();
};

function connect() {
    let socket = new SockJS('/stomp');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/activity', function (product) {
            console.log('тут1');
            console.log(product)
            renderItem(product);
        });
        /////////////////////////////////////////////////////////////////
        stompClient.subscribe('/topic/activity2', function (product) {
            console.log('тут2');
            console.log(product)
            renderItem(product);
        });
        //////////////////////////////////////////////////////////////////
        stompClient.subscribe('/topic/activity3', function (product) {
            console.log('тут3');
            console.log(product)
            renderItem3(product);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

// хук на интерфейс
$(function () {
    $("#form-add-product").on('submit', function (e) {
        e.preventDefault();
    });
    $("#send").click(function () {
        sendContent();
    });
});

// отправка сообщения на сервер
function sendContent() {
    stompClient.send("/app/webSocketProducts", {}, JSON.stringify({
        'id': $("#id").val(),
        'title': $("#title").val()
    }));
}

// рендер сообщения, полученного от сервера
function renderItem(productJson) {
    let product = JSON.parse(productJson.body);

    var sizeOfProductQuantity = product.sizeOfProductQuantity;
    var element = document.getElementById("sizeOfProductQuantity");
    element.innerText = sizeOfProductQuantity;


    $("#product-table").append(
        "<tr>" +
        "<td>" + product.id + "</td>" +
        "<td>" + product.title + "</td>" +

        // "<td><a href='/products/" + product.id + "/bucket'>Add to bucket</a></td>" +
        "<td><button onclick='sendContent3(" +product.id + ")'>AddToBucket</button></td>" +

        "</tr>");

}

///////////////////////////////////////////////////////////////////////////////////
// хук на интерфейс
$(function () {
    $("#form-add-product2").on('submit', function (e) {
        e.preventDefault();
    });
    $("#send2").click(function () {
        sendContent2();
    });
});

// отправка сообщения на сервер
function sendContent2() {
    stompClient.send("/app/webSocketProducts2", {}, JSON.stringify({
        'id': $("#id").val(),
        'title': $("#title").val()
    }));
}

/////////////////////////////////////////////////////////////////////////////////////








function sendContent3(id) {
    console.log(id);
     stompClient.send("/app/webSocketProducts3", {}, JSON.stringify({
         'id': id
     }));
}

function renderItem3(productJson) {
    let product = JSON.parse(productJson.body);

    var sizeOfProductInBucket = product.sizeOfProductInBucket;
    var element = document.getElementById("sizeOfProductInBucket");
    element.innerText = sizeOfProductInBucket;


    $("#bucket-table").append(
        "<tr>" +
        "<td>" + product.id + "</td>" +
        "<td>" + product.title + "</td>" +
        "</tr>");
}