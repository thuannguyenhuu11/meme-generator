'use client';

import { urlEndpoint } from '@/providers/Providers';
import { FileObject } from 'imagekit/dist/libs/interfaces';
import { IKImage } from 'imagekitio-next';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const ResultList = ({ files }: { files: FileObject[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {files.map(file => {
        return (
          <Card key={file.fileId}>
            <CardHeader>
              <CardTitle>{file.customMetadata?.displayName ?? file.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <IKImage
                key={file.fileId}
                urlEndpoint={urlEndpoint}
                path={file.filePath}
                alt={file.name}
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/customize/${file.fileId}`}> Customize</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultList;
