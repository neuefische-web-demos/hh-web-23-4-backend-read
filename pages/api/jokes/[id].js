import dbConnect from '@/db/connect.js';
import Joke from '@/db/models/Joke.js';

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  //const joke = jokes.find((joke) => joke.id === id);

  if (request.method === 'GET') {
    // kommt aus der DB

    const joke = await Joke.findById(id);

    if (!joke) {
      return response.status(404).json({ status: 'Not Found' });
    }

    // {_id: "kasödköaskdölksad"}

    return response.status(200).json(joke);
  }
}
