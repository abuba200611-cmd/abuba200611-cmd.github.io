/**
 * The desktop ground: an original ABK wallpaper drawn entirely in CSS —
 * gold light beams over near-black, a masked grid, and a vignette.
 */
export default function Wallpaper() {
  return (
    <div className="abk-wallpaper" aria-hidden="true">
      <div className="abk-grid" />
      <div className="abk-beam" style={{ transform: "rotate(9deg)", opacity: 1 }} />
      <div className="abk-beam" style={{ transform: "rotate(20deg)", opacity: 0.7 }} />
      <div className="abk-beam" style={{ transform: "rotate(33deg)", opacity: 0.42 }} />
      <div className="abk-beam" style={{ transform: "rotate(-4deg)", opacity: 0.5 }} />
      <div className="abk-vignette" />
    </div>
  );
}
