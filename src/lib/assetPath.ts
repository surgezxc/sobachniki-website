const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Public asset path with GitHub Pages basePath prefix. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
