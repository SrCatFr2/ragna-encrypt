const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hhhhj6120:asgdgdghashg545356%3Fsgfagag@cluster0.hy1du.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('CONENCTADO A MONGO DB, PUEDE ENTRAR AL HOST');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
