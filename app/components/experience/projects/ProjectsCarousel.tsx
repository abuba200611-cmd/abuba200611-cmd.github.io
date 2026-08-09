import { useMemo, useState } from "react";
import { isMobile } from "@utils";
import ProjectTile from "./ProjectTile";

import { PROJECTS } from "@constants";
import { usePortalStore } from "@stores";

const ProjectsCarousel = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isActive = usePortalStore((state) => state.activePortalId === "projects");
  const activeId = isActive ? selectedId : null;

  const onClick = (id: number) => {
    if (!isMobile) return;
    setSelectedId(id === selectedId ? null : id);
  };
  const tiles = useMemo(() => {
    const distance = 10;

    // A fixed angle per column, not a fixed total spread divided across
    // however many columns there happen to be — the old `fov / columns`
    // math meant the gap between adjacent tiles reflowed every time a
    // project was added or removed (more columns packed into the same
    // 180° spread pulled everything closer; fewer pushed them apart).
    // 36° keeps the on-screen gap the same regardless of project count.
    const angleStep = Math.PI / 5;

    return PROJECTS.map((project, i) => {
      const row = i % 2; // 0 or 1
      const column = Math.floor(i / 2);

      const angle = angleStep * column;

      const z = -distance * Math.sin(angle);
      const x = -distance * Math.cos(angle);

      const rotY = Math.PI / 2 - angle;

      // vertical stacking
      const y = row === 0 ? 3.25 : 1;
      const datePosition = row === 0 ? 'top' : 'bottom';
      return (
        <ProjectTile
          key={i}
          datePosition={datePosition}
          project={project}
          index={i}
          position={[x, y, z]}
          rotation={[0, rotY, 0]}
          activeId={activeId}
          onClick={() => onClick(i)}
        />
      );
    });
  }, [activeId, isActive]);

  return (
    <group rotation={[0, -Math.PI / 12, 0]}>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;