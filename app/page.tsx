'use client';
import { Button } from '@/components/ui/button';
import { IKImage, IKUpload, ImageKitProvider } from 'imagekitio-next';
import { useState } from 'react';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/auth');

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export default function Home() {
  const [filePath, setFilePath] = useState('');

  return (
    <div className="">
      <Button variant="destructive">Click me</Button>
      <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
        {filePath && (
          <IKImage
            width={300}
            height={500}
            path={filePath}
            transformation={[{ raw: 'l-text,i-hello world,fs-50,l-end' }]}
            loading="lazy"
            alt="Alt text"
          />
        )}

        <div>
          <h2>File upload</h2>
          <IKUpload
            fileName="test-upload.png"
            onError={err => {
              console.log('error', err);
            }}
            onSuccess={res => {
              console.log('success', res);
              setFilePath(res.filePath);
            }}
          />
        </div>
      </ImageKitProvider>
    </div>
  );
}
