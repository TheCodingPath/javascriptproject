async function getData() {

    let api = 'https://dummyjson.com/products';
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();
    let prod = data.products;
    return {
        products: prod
    }
}

let displayData = () => {

    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('myTable');
        let prod = result.products;
        for (let i = 0; i < prod.length; i++) {
            rows += `<tr><td><img src="${prod[i].thumbnail}" width="200px" height="150px" alt="img"/></td>
                    <td>${prod[i].title}</td>
                    <td>${prod[i].brand}</td>
                    <td>${prod[i].category}</td>
                    <td>${prod[i].description}</td>
                    <td>${prod[i].price}</td></tr>`

            tbody.innerHTML = rows;
        }
    })
}

displayData();

let filterByCategory = () => {
    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('myTable');
        let val = document.getElementById('productCategory').value.toLowerCase();
        let prod = result.products;

        for (let i = 0; i < prod.length; i++) {
            if (prod[i].category.toLowerCase() === val) {
                rows += `<tr>
                            <td><img src="${prod[i].thumbnail}" width="200px" height="150px" alt="img"/></td>
                            <td>${prod[i].title}</td>
                            <td>${prod[i].brand}</td>
                            <td>${prod[i].category}</td>
                            <td>${prod[i].description}</td>
                            <td>${prod[i].price}</td>
                         </tr>`;
            }
        }
        tbody.innerHTML = rows.length ? rows : `<h3 style="color:red; margin-left:20px;">No record found for this category</h3>`;
    });
}
