// init express
const express =  require('express');
const app = express();
// connect db
const connectDB = require('./config/db');
connectDB();

//init middleware
app.use(express.json({extented: false}));

app.get('/', (req, res) => res.json ({ msg: 'alexander bernhardt library backend ON PORT 5000'}));

// api routes
const user = require('./routes/users');
const auth = require('./routes/auth');
const invoice = require('./routes/invoices');
const booking = require('./routes/bookings');
const inquiry = require('./routes/inquiries');
// const transporter = require('./routes/transporters');

// remote api's
app.use('/api/users', user);
app.use('/api/auth', auth);
app.use('/api/invoices', invoice);
app.use('/api/bookings', booking);
app.use('/api/inquiries', inquiry);
// app.use('/api/transporters', transporter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));