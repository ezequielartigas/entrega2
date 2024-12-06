document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".btn");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    let total = 0;

    // Función para actualizar el total
    function actualizarTotal() {
        totalCarrito.textContent = total.toFixed(2);
    }

    // Evento para añadir productos al carrito
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const producto = e.target.parentElement;
            const nombre = producto.querySelector("p:nth-of-type(1)").textContent;
            const precioTexto = producto.querySelector("p:nth-of-type(2)").textContent;
            const precio = parseFloat(precioTexto.replace("$", "").trim());

            // Crear elemento de lista para el carrito
            const li = document.createElement("li");
            li.innerHTML = `
                ${nombre} - $${precio.toFixed(2)}
                <button class="eliminar">X</button>
            `;
            listaCarrito.appendChild(li);

            // Actualizar el total
            total += precio;
            actualizarTotal();

            // Evento para eliminar productos del carrito
            li.querySelector(".eliminar").addEventListener("click", () => {
                li.remove();
                total -= precio;
                actualizarTotal();
            });
        });
    });
});
