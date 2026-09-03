const GALLERY_PREFIX = "/gallery/";
const THUMBS_PREFIX = "/gallery/thumbs/";

/** Grid cover — smaller thumb; lightbox keeps full `src`. */
export function galleryThumbSrc(fullSrc: string): string {
  if (!fullSrc.startsWith(GALLERY_PREFIX)) return fullSrc;
  const filename = fullSrc.slice(GALLERY_PREFIX.length);
  return `${THUMBS_PREFIX}${filename}`;
}