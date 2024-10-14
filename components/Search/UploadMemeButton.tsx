'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IKUpload } from 'imagekitio-next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner/Spinner';

const UploadMemeButton = () => {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [tags, setTags] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload Meme</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload your meme image</DialogTitle>
          <DialogDescription>This is a meme image anyone on the site can build upon.</DialogDescription>

          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault();
              setIsUploading(true);
              uploadInputRef.current?.click();
            }}
          >
            <div>
              <div className="mb-4">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  placeholder="Display Name"
                  required
                  value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="Tags"
                  required
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                />
              </div>

              <IKUpload
                fileName="test-upload.png"
                customMetadata={{ displayName }}
                tags={[displayName, ...tags.split(',')]}
                onError={err => {
                  setIsUploading(false);
                  console.log('error', err);
                }}
                onSuccess={res => {
                  setIsUploading(false);
                  router.push(`/customize/${res.fileId}`);
                }}
                style={{ display: 'none' }}
                ref={uploadInputRef}
              />
            </div>

            <DialogFooter className="flex justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>

              <Button disabled={isUploading} type="submit">
                {isUploading && <Spinner />}
                Select & Upload Image
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMemeButton;
