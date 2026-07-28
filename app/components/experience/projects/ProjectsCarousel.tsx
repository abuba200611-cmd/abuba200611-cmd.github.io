import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import ProjectTile from "./ProjectTile";

import { PROJECTS_BY_LANG } from "@constants";
import { usePortalStore, useLangStore } from "@stores";

const ProjectsCarousel = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isActive = usePortalStore((state) => state.activePortalId === "projects");
  const lang = useLangStore((state) => state.lang);
  const activeId = isActive ? selectedId : null;

  const onClick = (id: number) => {
    if (!isMobile) return;
    setSelectedId(id === selectedId ? null : id);
  };
  const tiles = useMemo(() => {
    // Total angular spread across the whole row (all tiles face the
    // shared arc centre, matching the camera-pan mechanic below).
    const fov = Math.PI / 2;
    const distance = 10;
    const PROJECTS = PROJECTS_BY_LANG[lang];
    const count = PROJECTS.length;
    const y = isMobile ? 1.6 : 2;

    return PROJECTS.map((project, i) => {
      // Single row, evenly spaced and centered — no vertical stacking.
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
  }, [activeId, isActive, lang]);

  return (
    <group rotation={[0, -Math.PI / 12, 0]}>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;