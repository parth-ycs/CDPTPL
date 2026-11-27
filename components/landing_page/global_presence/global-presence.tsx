"use client";

import { useCallback, useMemo, useState } from "react";
import GlobalPresenceLeft from "./global-presence-left";
import GlobalPresenceGlobe from "./global-presence-globe";
import type { GlobalLocation, GlobalPoint } from "@/data/global-presence";
import Container from "@/components/container";

type Props = {
  locations: GlobalLocation[];
  exploreHref?: string;
};

type ViewMode = "global" | "country";

function getPoint(
  location: GlobalLocation,
  pointId: string,
): GlobalPoint | undefined {
  return (
    location.offices.find((office) => office.id === pointId) ??
    location.projects.find((project) => project.id === pointId)
  );
}

export default function GlobalPresenceSection({
  locations,
  exploreHref = "/global-presence",
}: Props) {
  const [activeLocationId, setActiveLocationId] = useState("india");
  const [viewMode, setViewMode] = useState<ViewMode>("global");
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);

  const activeLocation = useMemo(
    () =>
      locations.find((location) => location.id === activeLocationId) ??
      locations[0],
    [locations, activeLocationId],
  );

  const selectedPoint = useMemo(
    () =>
      activeLocation && selectedPointId
        ? getPoint(activeLocation, selectedPointId)
        : undefined,
    [activeLocation, selectedPointId],
  );

  const selectCountry = useCallback((location: GlobalLocation) => {
    setActiveLocationId(location.id);
    setSelectedPointId(null);
    setViewMode("country");
  }, []);

  const selectPoint = useCallback(
    (location: GlobalLocation, pointId: string) => {
      const point = getPoint(location, pointId);
      if (!point) return;

      setActiveLocationId(location.id);
      setSelectedPointId(pointId);
      setViewMode("country");
    },
    [],
  );

  const showGlobalView = useCallback(() => {
    setViewMode("global");
    setSelectedPointId(null);
  }, []);

  if (!activeLocation) {
    return null;
  }

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      <Container>
        <div className="mx-auto grid min-h-[620px] grid-cols-1 items-center py-12 lg:min-h-[680px] lg:grid-cols-[1.05fr_1.15fr] lg:gap-4 lg:py-10">
          <GlobalPresenceLeft
            locations={locations}
            activeLocation={activeLocation}
            viewMode={viewMode}
            selectedPointId={selectedPointId}
            selectedPoint={selectedPoint}
            exploreHref={exploreHref}
            onSelectCountry={selectCountry}
            onSelectPoint={selectPoint}
            onShowGlobal={showGlobalView}
          />

          <GlobalPresenceGlobe
            locations={locations}
            activeLocation={activeLocation}
            viewMode={viewMode}
            selectedPointId={selectedPointId}
            onSelectCountry={selectCountry}
            onSelectPoint={selectPoint}
          />
        </div>
      </Container>
    </section>
  );
}