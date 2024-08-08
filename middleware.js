const express = require('express');
const app = express();

app.use('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    next(err); // Passing the error to the next middleware
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal Server Error!');
});


app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
