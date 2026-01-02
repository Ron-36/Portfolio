import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo({
  height = "30vh",
}: {
  height?: string;
}) {
  return (
    <div
      className="absolute  top-0 left-0 w-full overflow-hidden"
      style={{ height }}
    >
      {/* GRID */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* FADE */}
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
    </div>
  );
}
