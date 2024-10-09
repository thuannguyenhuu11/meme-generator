'use client';
import { IKImage } from 'imagekitio-next';

export default function Home() {
  return (
    <div>
      {/* <Image
        src="https://ik.imagekit.io/thuanhaki/tr:w-5000,h-5000/drake-meme.png?updatedAt=1728495391378/"
        width={500}
        height={500}
        alt="image"
      /> */}

      <IKImage
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
        path="drake-meme.png"
        transformation={[{ width: '300', height: '300' }, { raw: 'l-text,i-hello world,fs-50,l-end' }]}
        alt="Alt text"
      />
    </div>
  );
}
