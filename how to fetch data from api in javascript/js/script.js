async function displayData(api) {
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();
     console.log(data.products)

}

displayData('https://dummyjson.com/products');

async function displayData(api) {

    let tbody = document.getElementById('myTable');
    let rows = '';
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();

    //console.log(data.products[0])
    let prod = data.products;
    for (let i = 0; i < prod.length; i++) {
        rows += `<tr><td><img src="${prod[i].thumbnail}" width="200px" height="150px" alt="img"/></td>
        <td>${prod[i].title}</td>
        <td>${prod[i].brand}</td>
        <td>${prod[i].category}</td>
        <td>${prod[i].description}</td>
        <td>${prod[i].price}</td></tr>`

    }
    tbody.innerHTML = rows;

}

displayData('https://dummyjson.com/products');