'use client';

import { urlEndpoint } from '@/providers/Providers';
import { FileObject } from 'imagekit/dist/libs/interfaces';
import { IKImage } from 'imagekitio-next';

const ResultList = ({ files }: { files: FileObject[] }) => {
  return (
    <div>
      {files.map(file => {
        return (
          <IKImage
            key={file.fileId}
            urlEndpoint={urlEndpoint}
            path={file.filePath}
            alt={file.name}
            width={300}
            height={300}
          />
        );
      })}
    </div>
  );
};

export default ResultList;
