import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
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
    // Single row, evenly spaced along one arc — no vertical stacking, so
    // tiles can never land on top of each other regardless of count. A
    // narrower fov keeps the whole row inside the camera's default view
    // (no panning needed to see everything); distance is scaled up to
    // compensate so the tighter angle doesn't crowd the tiles together.
    const fov = Math.PI / 3;
    const distance = 17;
    const count = PROJECTS.length;
    const y = isMobile ? 1.6 : 2;

    return PROJECTS.map((project, i) => {
      const angle = count > 1 ? -fov / 2 + (fov / (count - 1)) * i : 0;

      const z = -distance * Math.sin(angle);
      const x = -distance * Math.cos(angle);

      const rotY = Math.PI / 2 - angle;

      return (
        <ProjectTile
          key={i}
          datePosition="top"
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
    <group>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;
