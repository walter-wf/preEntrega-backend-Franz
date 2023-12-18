import Product from "./classes/product.js";
import ProductManager from "./classes/productManager.js";

const producto1 = new Product("Consola", "Series S", 300, "", "HC001", true)
const producto2 = new Product("Consola", "Playstation 4", 300, "", "HV001", true)
const producto3 = new Product("Consola", "Playstation 5", 500, "", "HF001", true)
const producto4 = new Product("Consola", "Nintendo Switch", 400, "", "HL001", true)

const productManager = new ProductManager();

// Agregar productos
productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)
productManager.addProduct(producto4)

// Obtener productos
productManager.getProducts()

//Obtener by ID

productManager.getProductById(3)
productManager.getProductById(1)

// Eliminar productos
// productManager.clearProducts()