// js/utils/path.js
export function isActivePath(currentPath, href) {
  // 1. Return true if current path matches href exactly
  if (currentPath === href) return true;

  // 2. Return true for root path ("/") when path is "/" or "/index.html"
  if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
    return true;
  }

  // 3. Return true if current path includes href
  if (currentPath.includes(href)) return true;

  // 4. Otherwise, return false
  return false;
}
