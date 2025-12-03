export const getAssetPath = (path) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  // Ensure path starts with / if not present, but handle if path is just filename
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
