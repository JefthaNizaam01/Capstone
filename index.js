import cookieParser from 'cookie-parser';
import productsRoute from './Routes/productsRoute.js';
import cartRoute from './Routes/cartRoute.js';
import { router as userRoute } from './Routes/userRoute.js';

import authenticate from './Middleware/signToken.js'; // Import token sign middleware
import verifyJwt from './Middleware/verifyJwt.js'
import userRoute from './Routes/userRoute.js';
import authenticate from './Middleware/signToken.js';

const app = express();
const PORT = process.env.PORT || 2307;
const PORT = process.env.MYSQL_ADDON_PORT || 2303;

app.use(express.static('./Static'));

app.use(cors({
    origin: 'http://localhost:8080', // Allow your frontend origin
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    origin: 'http://localhost:8080',
    credentials: true
}));


app.use(express.json());
app.use(cookieParser());

// Public route for login
app.post('/login', authenticate);
app.post('/login', authenticate, (req, res) => { 
});

// Public route for logout
app.delete('/logout', (req, res) => {
    res.clearCookie('jwt');
    console.log("User logged out, cookies cleared.");
    res.clearCookie('jwt')
    res.json({
        msg: 'Logged out successfully'
        msg : 'logged out successfully'
    });
});

// Apply routes
app.use('/products', productsRoute); // No global auth middleware for products
app.use('/carts', cartRoute);
app.use('/products', productsRoute);
app.use('/cart', cartRoute);
app.use('/users', userRoute);

// 404 Catcher - After all routes
app.use((req, res, next) => {
    res.status(404).send({ msg: 'Route not found' });
});
app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




// {
//     "user_profile": "JohnDoe",
//     "user_email": "JD1@gmail.com",
//     "user_password": "john",
//     "user_role": "admin",
//     "user_image": "nothing"
// }


{/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/PlyvO0z" data-context="false" ><a href="//imgur.com/a/PlyvO0z"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
// https://i.imgur.com/8Pvhmao.mp4