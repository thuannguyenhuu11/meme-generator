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
    <div>
      <ResultList files={files} />
    </div>
  );
};

export default SearchPage;
