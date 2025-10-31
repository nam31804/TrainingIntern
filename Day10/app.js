async function loadProducts() {
  const res = await fetch("Day10/products.json");
  const data = await res.json();

  display("PhongKhach", data.PhongKhach);
  display("PhongBep", data.PhongBep);
  display("PhongNgu", data.PhongNgu);
}

function display(id, items) {
  let container = document.querySelector("#" + id + " .list");
  items.forEach(p => {
    container.innerHTML += `
      <div class="item">
        <img src="${p.img}" />
        <h3>${p.name}</h3>
        <div class="price-old">${p.oldPrice}</div>
        <div class="price">${p.price}</div>
      </div>
    `;
  });
}

loadProducts();
