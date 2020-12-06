/**
 * Created by cuong on 20/10/2020.
 */
var food = [
    {

        id: 0,
        name: "Đồng hồ Calvin Klein",
        price: "90000",
        note: "Calvin Klein có đường kính 42 mm và độ dày 9 mm",
        image: "img/sanpham/sp1.jpg"
    }, {
        id: 1,
        name: "Đồng hồ TissotT006",
        price: "50000",
        note: "có đường kính 39.3 mm và độ dày 11.55 mm",
        image: "img/sanpham/sp1.jpg"
    }, {
        id: 2,
        name: "Đồng hồ TissotT086",
        price: "130000",
        note: "Đường kính 41 mm cùng độ dày 9.8 mm",
        image: "iimg/sanpham/sp1.jpg"
    }, {
        id: 3,
        name: "Đồng hồ TissotT065",
        price: "90000",
        note: "là một mẫu đồng hồ cơ thuộc thương hiệu Tissot của Thuỵ Sĩ",
        image: "img/sanpham/sp1.jpg"
    }, {
        id: 4,
        name: "Đồng hồ Ogival",
        price: "50000",
        note: "đồng hồ Ogival Skeleton chưa bao giờ hết HOT trên thị trường",
        image: "img/sanpham/sp1.jpg"
    }, {
        id: 5,
        name: "Đồng hồ Orient",
        price: "60000",
        note: "Made in Thụy Sĩ by Rolex",
        image: "img/sanpham/sp1.jpg"
    }, {
        id: 6,
        name: "Đồng hồ Benley BL1839",
        price: "300000",
        note: "Được sản xuất thủ công tại Anh",
        image: "img/sanpham/sp1.jpg"
    }, {
        id: 7,
        name: "Đồng hồ Beley BL1831",
        price: "25000",
        note: "Được sản xuất thủ công tại Anh",
        image: "img/sanpham/sp1.jpg"
    }];

function Save(){
    localStorage.setItem('ListFood', JSON.stringify(food));
}
function load() {
    food = JSON.parse(localStorage.getItem('ListFood'));
}
if(localStorage.getItem('ListFood') != null){
    load();
}

var listLocal = function () {
    var ListFood ="";
    for(var i in food){
     var data = JSON.parse(JSON.stringify(food[i]))
        var ListFood = '<div class="col-md-3 col-sm-6 col-12">';
     ListFood += '<div class="card card-product mb-3">';
     ListFood += '<img class="card-img-top" src="img/sanpham/' + data.image + '" >';
     ListFood += '<div class="card-body>';
     ListFood += '<div class="card-title product-title">' + data.name + '</div>';
     ListFood += '<div class="price text-center h">' + data.note + '</div>';
     ListFood += '<div class="price text-center h$">' + data.price + '</div>';
     ListFood += '<a>';
     ListFood += '<i class="fas fa-card-plus"></i>';
     ListFood += '</a>';
     ListFood += '</div>';
     ListFood += '</div>';
        document.getElementById("banchay").innerHTML += ListFood;
    }
    Save();
}
listLocal();


