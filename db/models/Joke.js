import mongoose from 'mongoose';

const { Schema } = mongoose;

// Bauplan
const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

// Model -> functions C--"R"---UD

const Joke = mongoose.models.Joke || mongoose.model('Joke', jokeSchema);

export default Joke;
