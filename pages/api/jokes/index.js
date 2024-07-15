import { jokes } from '../../../lib/data.js';

export default function handler(request, response) {
  if (request.method === 'GET') {
    // jokes aus unser Database
    response.status(200).json(jokes);
    return;
  } else {
    response.status(405).json({ message: 'Method not allowed' });
  }
}
