import { connection } from '../config/index.js';

class Cart {
  
    handleError(res, msg, err) {
        res.status(500).json({
            msg: msg,
            error: err
        });
    }

  
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
                this.handleError(res, 'Unable to fetch cart items.', err);
            } else {
                res.status(200).json({ results });
            }
        });
    }

  
    addToCart(prodID, userID, res) {
        const strQry = `
            INSERT INTO cart (prodID, userID, quantity)
            VALUES (?, ?, 1)
            ON DUPLICATE KEY UPDATE quantity = quantity + 1;
        `;
        
        connection.query(strQry, [prodID, userID], (err, results) => {
            if (err) {
                this.handleError(res, 'Error while adding/updating product in the cart.', err);
            } else {
                const msg = results.affectedRows === 1 ? 'Product added to cart.' : 'Product quantity updated in cart.';
                res.status(200).json({ msg });
            }
        });
    }

    
    deleteFromCart(prodID, userID, res) {
        const checkProductQry = `
            SELECT quantity FROM cart
            WHERE prodID = ? AND userID = ?;
        `;
        
        connection.query(checkProductQry, [prodID, userID], (err, results) => {
            if (err) {
                this.handleError(res, 'Error while checking the cart.', err);
                return;
            }
            
            if (results.length === 0) {
                res.status(404).json({ msg: 'Product not found in cart.' });
                return;
            }

            const currentQuantity = results[0].quantity;
            const updatedQuantity = currentQuantity - 1;

            if (updatedQuantity <= 0) {
                const deleteQry = `
                    DELETE FROM cart
                    WHERE prodID = ? AND userID = ?;
                `;
                
                connection.query(deleteQry, [prodID, userID], (err) => {
                    if (err) {
                        this.handleError(res, 'Error while removing product from the cart.', err);
                    } else {
                        res.status(200).json({ msg: 'Product removed from cart.' });
                    }
                });
            } else {
                const updateQry = `
                    UPDATE cart
                    SET quantity = ?
                    WHERE prodID = ? AND userID = ?;
                `;
                
                connection.query(updateQry, [updatedQuantity, prodID, userID], (err) => {
                    if (err) {
                        this.handleError(res, 'Error while updating product quantity in cart.', err);
                    } else {
                        res.status(200).json({ msg: 'Product quantity decreased in cart.' });
                    }
                });
            }
        });
    }
}

export { Cart };
