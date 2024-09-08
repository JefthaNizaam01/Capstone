import { connection as db } from '../config/index.js';
import { createToken } from '../middleware/AuthenticateUser.js';
import { compare, hash } from 'bcrypt';

class Users {

    queryDB(query, params = []) {
        return new Promise((resolve, reject) => {
            db.query(query, params, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }

    
    handleError(res, err, msg, statusCode = 500) {
        console.error(msg, err);
        res.status(statusCode).json({ msg });
    }

    
    async fetchUsers(req, res) {
        try {
            const strQry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile FROM Users;`;
            const result = await this.queryDB(strQry);
            res.json({ status: res.statusCode, result });
        } catch (err) {
            this.handleError(res, err, 'Issue when retrieving all users.');
        }
    }

   
    async fetchUser(req, res) {
        try {
            const userID = parseInt(req.params.id, 10);
            if (isNaN(userID)) return res.status(400).json({ msg: 'Invalid user ID' });

            const strQry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile FROM Users WHERE userID = ?;`;
            const result = await this.queryDB(strQry, [userID]);

            if (result.length === 0) return res.status(404).json({ msg: 'User not found' });
            res.json({ status: res.statusCode, result: result[0] });
        } catch (err) {
            this.handleError(res, err, 'Unable to fetch user');
        }
    }

   
    async registerUser(req, res) {
        try {
            const data = req.body;
            data.userPass = await hash(data.userPass, 12);

            const user = {
                emailAdd: data.emailAdd,
                userPass: data.userPass,
            };

            const strQry = `INSERT INTO Users SET ?;`;
            await this.queryDB(strQry, [data]);

            const token = createToken(user);
            res.json({ token, msg: 'You are now registered.' });
        } catch (err) {
            this.handleError(res, err, 'This email has already been taken.');
        }
    }

   
    async updateUser(req, res) {
        try {
            const data = req.body;
            const userID = parseInt(req.params.id, 10);

            if (isNaN(userID)) return res.status(400).json({ msg: 'Invalid user ID' });

            if (data.userPass) {
                data.userPass = await hash(data.userPass, 12);
            }

            const strQry = `UPDATE Users SET ? WHERE userID = ?;`;
            await this.queryDB(strQry, [data, userID]);

            res.json({ status: res.statusCode, msg: 'The user record was updated' });
        } catch (err) {
            this.handleError(res, err, 'Unable to update user.');
        }
    }

   
    async deleteUser(req, res) {
        try {
            const userID = parseInt(req.params.id, 10);
            if (isNaN(userID)) return res.status(400).json({ msg: 'Invalid user ID' });

            const strQry = `DELETE FROM Users WHERE userID = ?;`;
            await this.queryDB(strQry, [userID]);

            res.json({ status: res.statusCode, msg: 'User deleted successfully' });
        } catch (err) {
            this.handleError(res, err, 'Error deleting user');
        }
    }

    
    async login(req, res) {
        try {
            const { emailAdd, userPass } = req.body;
            const strQry = `SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile FROM Users WHERE emailAdd = ?;`;

            const results = await this.queryDB(strQry, [emailAdd]);

            if (results.length === 0) {
                return res.status(401).json({ status: 401, err: 'Incorrect email or password.' });
            }

            const user = results[0];
            const isValidPass = await compare(userPass, user.userPass);

            if (isValidPass) {
                const token = createToken({
                    id: user.userID,
                    emailAdd: user.emailAdd,
                    userRole: user.userRole,
                });

                res.status(200).json({ status: 200, token, user, msg: 'Login successful.' });
            } else {
                res.status(401).json({ status: 401, err: 'Incorrect email or password.' });
            }
        } catch (err) {
            this.handleError(res, err, 'Unable to process login request.');
        }
    }
}

export { Users };
