import { userRouter, express } from './controller/UserController.js'
import { productRouter } from './controller/ProductController.js'
import { cartRouter } from './controller/CartController.js'
import cors from 'cors'
import path from 'path'


const app = express()
const port = +process.env.PORT || 4000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");

    next()
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cors()
)
app.use('/users', userRouter)
app.use('/products', productRouter)
app.get('^/$|/Capstone', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
app.use('/cart', cartRouter);



app.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})