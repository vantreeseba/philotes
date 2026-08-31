import { type ChangeEvent, type RefObject, useRef } from 'react';
import { getToken } from '@/lib/auth';

interface AvatarUpload {
  /** Attach to the hidden file input the picker opens. */
  inputRef: RefObject<HTMLInputElement | null>;
  /** onChange handler for that input. */
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

/**
 * Uploads a picked file to `/avatars/:personId`. The avatar endpoint is a
 * plain multipart POST rather than a GraphQL mutation, so it carries the bearer
 * token itself, and the caller refetches once it resolves.
 */
export function useAvatarUpload(personId: string, onUploaded: () => void): AvatarUpload {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    const token = getToken();
    await fetch(`/avatars/${personId}`, {
      method: 'POST',
      body: formData,
      headers: token ? { authorization: `Bearer ${token}` } : {},
    });

    // Reset the input so the same file can be re-selected.
    if (inputRef.current) inputRef.current.value = '';
    onUploaded();
  };

  return { inputRef, onChange };
}
