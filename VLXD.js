let listProduct = []
// let editIndex

function displayProduct() {
    let data = "<table>"
    data += "<tr>" +
        "<td><b style='flex: 300px'>Tên vật liệu</b></td>" +
        "<td><b>Giá</b></td>" +
        "<td><b>Màu sắc</b></td>" +
        "<td colspan='3' style='color: black'>" + listProduct.length + " Vật liệu</td></tr>"
    for (let i = 0; i < listProduct.length; i++) {
        data += "<tr>"
        data += "<td class='name'>" + listProduct[i].name + "</td>"
        data += "<td class='name'>" + listProduct[i].price + "</td>"
        data += "<td class='name'>" + listProduct[i].color + "</td>"
        // data += "<td><button onclick='edit(" + i + ")'>Sửa lại</button></td>"
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
    let product = new Product(name, price, color)
    listProduct.push(product)
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("color").value = ""
    displayProduct()
}

// function edit(index) {
//     // let product = prompt("Nhập vào giá trị bạn muốn thay đổi: ", listProduct[index])
//     // listProduct[index] = product
//     document.getElementById("name").value = listProduct[index].name
//     document.getElementById("price").value = listProduct[index].price
//     document.getElementById("color").value = listProduct[index].brand
//     editIndex = index
//     displayProduct()
// }
//
// function editProduct() {
//     // let product = document.getElementById("edit").value
//     listProduct[editIndex].name = document.getElementById("name").value
//     listProduct[editIndex].price = document.getElementById("price").value
//     listProduct[editIndex].brand = document.getElementById("color").value
//     document.getElementById("name").value = ""
//     document.getElementById("price").value = ""
//     document.getElementById("color").value = ""
//     displayProduct()
// }

function deleteProduct(index) {
    listProduct.splice(index, 1)
    displayProduct()
}

// function viewProduct(index) {
//     document.getElementById("product").innerHTML = "Sản phẩm thứ " + (index + 1) + " là: " + listProduct[index]
// }