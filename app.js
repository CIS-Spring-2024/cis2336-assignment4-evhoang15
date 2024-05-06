const express = require('express');
const bodyParser = require('body-parser');
const { version } = require('os');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submitOrder', (req, res) => {
    // Extract form data from request body
    const { food1, food2, food3, food4, food5, food6, food7, food8, food9} = req.body;

    // Prices for each food item
    const prices = {
        food1: 5,
        food2: 10,
        food3: 12,
        food4: 8,
        food5: 9,
        food6: 15,
        food7: 11,
        food8: 10,
        food9: 13,
    };

    // Calculate total amount based on the quantities of selected food items
    let totalAmount = 0;
    if (food1 && !isNaN(food1)) {
        totalAmount += parseInt(food1) * prices.food1;
    }
    if (food2 && !isNaN(food2)) {
        totalAmount += parseInt(food2) * prices.food2;
    }
    if (food3 && !isNaN(food3)) {
        totalAmount += parseInt(food3) * prices.food3;
    }
    if (food4 && !isNaN(food4)) {
        totalAmount += parseInt(food4) * prices.food4;
    }
    if (food5 && !isNaN(food5)) {
        totalAmount += parseInt(food5) * prices.food5;
    }
    if (food6 && !isNaN(food6)) {
        totalAmount += parseInt(food6) * prices.food6;
    }
    if (food7 && !isNaN(food7)) {
        totalAmount += parseInt(food7) * prices.food7;
    }
    if (food8 && !isNaN(food8)) {
        totalAmount += parseInt(food8) * prices.food8;
    }
    if (food9 && !isNaN(food9)) {
        totalAmount += parseInt(food9) * prices.food9;
    }

    // Render the order confirmation page with the total amount
    res.send(`
        <h1>Order Confirmation</h1>
        <p>Total Amount: $${totalAmount}</p>
        <p>Your order has been successfully placed!</p>
    `);
});


