'use client';

import { urlEndpoint } from '@/providers/Providers';
import { FileObject } from 'imagekit/dist/libs/interfaces';
import { IKImage } from 'imagekitio-next';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ResultList = ({ files }: { files: FileObject[] }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {files.map(file => {
        return (
          <Card key={file.fileId}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
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
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultList;
