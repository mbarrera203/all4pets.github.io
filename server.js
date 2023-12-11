import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

// Cart
app.get("/cart.html", (req, res) => {
    res.sendFile("cart.html", { root: "public" });
});

// Aprobado
app.get("/aprobado.html", (req, res) => {
    res.sendFile("aprobado.html", { root: "public" });
});

// Cancelado
app.get("/cancelado.html", (req, res) => {
    res.sendFile("cancelado.html", { root: "public" });
});

// Stripe
const stripeGateway = stripe(process.env.STRIPE_KEY);

app.post("/stripe-checkout", async (req, res) => {
    const productosEnCarrito = req.body.items;

    const lineItems = productosEnCarrito.map(product => ({
        price_data: {
            currency: 'usd', // Cambia a tu moneda preferida
            product_data: {
                name: product.title,
                images: [product.image],
            },
            unit_amount: product.price * 100,
        },
        quantity: product.cantidad,
    }));

    try {
        const session = await stripeGateway.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `http://localhost:3000/aprobado.html`,
            cancel_url: `http://localhost:3000/cancelado.html`,
            billing_address_collection: "required",
            line_items: lineItems,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error("Error al crear la sesión de Stripe:", error.message);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.listen(3000, () => {
    console.log("Escuchando el puerto 3000");
});