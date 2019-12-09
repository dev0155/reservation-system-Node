let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let app = express();
let mainRouter = require('./router/main');
mongoose.connect('mongodb://localhost:27017/moments', ({useNewUrlParser: true}));

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('uploads'));

app.use('/api', mainRouter);

app.listen(3000, () => {
    console.log('listening...')
});