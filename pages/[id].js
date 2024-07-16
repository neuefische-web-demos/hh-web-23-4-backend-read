import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';

export default function JokeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/jokes/${id}`);

  // {_id: "klkdökasdköasdk"}

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {data._id}</small>
      <h1>{data.joke} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
