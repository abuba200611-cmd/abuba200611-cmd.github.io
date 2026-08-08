import { isMobile as isMobileUserAgent } from "react-device-detect";

// The 3D scene is laid out for a wide viewport; the mobile branch of every
// component compresses it to fit a narrow one. Picking the branch by
// user-agent alone misses Chrome's "Request desktop site" mode, where a phone
// sends a desktop UA but still has a tall, narrow screen — the wide layout then
// spills off both edges. Fall back to viewport geometry, which is what the
// layout actually depends on.
const MIN_DESKTOP_WIDTH = 800;
const MIN_DESKTOP_ASPECT = 1.1;

const hasNarrowViewport = () => {
  if (typeof window === 'undefined') return false;
  const { innerWidth: width, innerHeight: height } = window;
  if (!width || !height) return false;
  return width < MIN_DESKTOP_WIDTH || width / height < MIN_DESKTOP_ASPECT;
};

// Read once on load, like react-device-detect does, so every component sees the
// same value for the lifetime of the page.
export const isMobile = isMobileUserAgent || hasNarrowViewport();
