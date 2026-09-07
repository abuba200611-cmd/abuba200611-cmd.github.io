/** Shared by the pre-paint script in the layout and the toggle in the taskbar. */
export const THEME_KEY = "am-theme";

/**
 * Runs before first paint (see layout.tsx) so the right theme is already on
 * <html> when the page renders — no flash of the wrong theme. It only stamps
 * data-theme when the visitor has made an explicit choice; with nothing stored
 * the attribute stays absent and the prefers-color-scheme block in globals.css
 * decides.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY
)});if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;
