import { connection } from '../config/index.js';

class Cart {
    // Fetch all items in the cart for a specific user
    fetchCart(userID, res) {
        const strQry = `
        SELECT 
            cart.cartID,
            cart.quantity,  
            Products.prodName AS prodName,
            Products.amount,
            (cart.quantity * Products.amount) AS total_price,
            Products.prodURL,
            Products.prodID AS prodID
        FROM 
            cart
        JOIN 
            Products ON cart.prodID = Products.prodID
        WHERE 
            cart.userID = ?;
        `;
    
        connection.query(strQry, [userID], (err, results) => {
            if (err) {
                res.status(500).json({
                    msg: 'Unable to fetch cart items.',
                    error: err
                });
            } else {
                res.status(200).json({
                    results
                });
            }
        });
    }

    // Add a product to the cart or update its quantity if it already exists
    addToCart(prodID, userID, res) {
        const checkProductQry = `
            SELECT * FROM cart
            WHERE prodID = ? AND userID = ?;
        `;
        
        connection.query(checkProductQry, [prodID, userID], (err, results) => {
            if (err) {
                res.status(500).json({
                    msg: 'Error while checking the cart.',
                    error: err
                });
                return;
            }
            
            if (results.length > 0) {
                // If product already exists, increase its quantity
                const updatedQuantity = results[0].quantity + 1;
                const updateQry = `
                    UPDATE cart
                    SET quantity = ?
                    WHERE prodID = ? AND userID = ?;
                `;
                
                connection.query(updateQry, [updatedQuantity, prodID, userID], (err) => {
                    if (err) {
                        res.status(500).json({
                            msg: 'Error while updating the cart.',
                            error: err
                        });
                    } else {
                        res.status(200).json({
                            msg: 'Product quantity updated in cart.'
                        });
                    }
                });
            } else {
                // If product doesn't exist, add it to the cart
                const insertQry = `
                    INSERT INTO cart (prodID, userID, quantity)
                    VALUES (?, ?, 1);
                `;
                
                connection.query(insertQry, [prodID, userID], (err) => {
                    if (err) {
                        res.status(500).json({
                            msg: 'Error while adding product to the cart.',
                            error: err
                        });
                    } else {
                        res.status(200).json({
                            msg: 'Product added to cart.'
                        });
                    }
                });
            }
        });
    }

    // Remove a product from the cart or decrease its quantity
    deleteFromCart(prodID, userID, res) {
        const checkProductQry = `
            SELECT * FROM cart
            WHERE prodID = ? AND userID = ?;
        `;
        
        connection.query(checkProductQry, [prodID, userID], (err, results) => {
            if (err) {
                res.status(500).json({
                    msg: 'Error while checking the cart.',
                    error: err
                });
                return;
            }
            
            if (results.length > 0) {
                const updatedQuantity = results[0].quantity - 1;
                
                if (updatedQuantity <= 0) {
                    // If quantity is 0 or less, remove the product from the cart
                    const deleteQry = `
                        DELETE FROM cart
                        WHERE prodID = ? AND userID = ?;
                    `;
                    
                    connection.query(deleteQry, [prodID, userID], (err) => {
                        if (err) {
                            res.status(500).json({
                                msg: 'Error while removing product from the cart.',
                                error: err
                            });
                        } else {
                            res.status(200).json({
                                msg: 'Product removed from cart.'
                            });
                        }
                    });
                } else {
                    // Otherwise, decrease the quantity
                    const updateQry = `
                        UPDATE cart
                        SET quantity = ?
                        WHERE prodID = ? AND userID = ?;
                    `;
                    
                    connection.query(updateQry, [updatedQuantity, prodID, userID], (err) => {
                        if (err) {
                            res.status(500).json({
                                msg: 'Error while updating product quantity in cart.',
                                error: err
                            });
                        } else {
                            res.status(200).json({
                                msg: 'Product quantity decreased in cart.'
                            });
                        }
                    });
                }
            } else {
                res.status(404).json({
                    msg: 'Product not found in cart.'
                });
            }
        });
    }
}

export {
    Cart
}