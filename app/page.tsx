'use client';
import { Button } from '@/components/ui/button';
import { urlEndpoint } from '@/providers/Providers';
import { IKImage, IKUpload } from 'imagekitio-next';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  return (
    <div className="">
      <Button variant="destructive">Click me</Button>

      {name && (
        <IKImage
          width={300}
          height={500}
          urlEndpoint={urlEndpoint}
          path={name}
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
            setName(res.name);
          }}
        />
      </div>
    </div>
  );
}
