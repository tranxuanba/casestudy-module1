let listProduct = []
let editIndex

function displayProduct() {
    let data = "<table>"
    data += "<tr>" +
        "<td><b style='flex: 300px'>Tên vật liệu</b></td>" +
        "<td><b>Giá</b></td>" +
        "<td><b>Màu sắc</b></td>" +
        "<td><b>Số lượng</b></td>"
    for (let i = 0; i < listProduct.length; i++) {
        data += "<tr>"
        data += "<td class='name'>" + listProduct[i].name + "</td>"
        data += "<td class='name'>" + listProduct[i].price + "</td>"
        data += "<td class='name'>" + listProduct[i].color + "</td>"
        data += "<td class='name'>" + listProduct[i].amount + "</td>"
        data += "<td><button onclick='edit(" + i + ")'>Sửa lại</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Xoá</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("product").innerHTML = data
}

function add() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let color = document.getElementById("color").value
    let amount = document.getElementById("amount").value
    let product = new Product(name, price, color, amount)
    listProduct.push(product)
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("color").value = ""
    document.getElementById("amount").value = ""
    displayProduct()
}

function edit(index) {
    document.getElementById("name").value = listProduct[index].name
    document.getElementById("price").value = listProduct[index].price
    document.getElementById("color").value = listProduct[index].color
    document.getElementById("amount").value = listProduct[index].amount
    editIndex = index
    displayProduct()
}

function editProduct() {
    listProduct[editIndex].name = document.getElementById("name").value
    listProduct[editIndex].price = document.getElementById("price").value
    listProduct[editIndex].color = document.getElementById("color").value
    listProduct[editIndex].amount = document.getElementById("amount").value
    let product = new Product(name, price, color, amount)
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("color").value = ""
    document.getElementById("amount").value = ""
    // editProduct()
    displayProduct()
}

function deleteProduct(index) {
    listProduct.splice(index, 1)
    displayProduct()
}

