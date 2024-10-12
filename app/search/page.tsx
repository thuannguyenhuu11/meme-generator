import ResultList from '@/components/Search/ResultList';
import ImageKit from 'imagekit';
import { IKImage } from 'imagekitio-next';
import { unstable_noStore } from 'next/cache';

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT,
});

const SearchPage = async ({ searchParams }: { searchParams: { q: string } }) => {
  unstable_noStore();

  const files = await imagekit.listFiles({
    searchQuery: `name:${searchParams.q}`,
  });

  return (
    <div className="container mx-auto space-y-8 py-8">
      <h1 className="text-4xl font-bold">Search Results</h1>
      <ResultList files={files} />
    </div>
  );
};

export default SearchPage;
