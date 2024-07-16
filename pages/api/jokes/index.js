import dbConnect from '@/db/connect.js';
import Joke from '@/db/models/Joke.js';

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === 'GET') {
    // jokes aus unser Database ⤵️

    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  } else {
    response.status(405).json({ message: 'Method not allowed' });
  }
}
