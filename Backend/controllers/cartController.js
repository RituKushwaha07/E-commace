const Cart = require("../models/Cart");


// 👉 ADD TO CART
const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            // new cart
            cart = new Cart({
                userId,
                items: [{ productId, quantity: 1 }]
            });
        } else {
            // existing cart
            const item = cart.items.find(
                i => i.productId.toString() === productId
            );

            if (item) {
                item.quantity += 1;
            } else {
                cart.items.push({ productId, quantity: 1 });
            }
        }

        await cart.save();

        res.json({
            message: "Item added to cart",
            cart
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// 👉 REMOVE ITEM
const removeItem = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter(
            i => i.productId.toString() !== productId
        );

        await cart.save();

        res.json({
            message: "Item removed from cart",
            cart
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// 👉 UPDATE QUANTITY
const updateQuantity = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const item = cart.items.find(
            i => i.productId.toString() === productId
        );

        if (!item) {
            return res.status(404).json({
                message: "Item not found in cart"
            });
        }

        item.quantity = quantity;

        await cart.save();

        res.json({
            message: "Item quantity updated",
            cart
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// 👉 GET CART
const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        const cart = await Cart.findOne({ userId })
            .populate("items.productId");

        res.json(cart);

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


module.exports = {addToCart,removeItem,updateQuantity,getCart};