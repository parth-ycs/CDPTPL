
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// TYPES
// ============================================

type IndustrialItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  x: number;
  y: number;
  width: number;
  delay: number;
};

type TreePosition = {
  x: number;
  y: number;
  size: number;
  variant: "small" | "medium" | "large";
};

// ============================================
// HOVER CONFIGURATION
// ============================================

const HOVERABLE_ITEM_IDS = new Set([
  "process-equipment",
  "process-plant",
  "membrane",
  "green-process",
  "water-treatment",
  "storage",
]);

// ============================================
// INDUSTRIAL ELEMENTS
// ALL ORIGINAL POSITIONS PRESERVED
// ============================================

const industrialItems: IndustrialItem[] = [
  {
    id: "process-equipment",
    title: "Process Equipment & Separation",
    category: "01",
    description:
      "Advanced process equipment, distillation columns, pressure vessels and separation technologies.",
    image: "/images/industrial_showcase/process-equipment.png",
    x: 30,
    y: 12,
    width: 26,
    delay: 0.2,
  },
  {
    id: "process-plant",
    title: "Process Plants & EPC",
    category: "02",
    description:
      "Integrated process plants, engineering, procurement and construction solutions.",
    image: "/images/industrial_showcase/process-plant.png",
    x: 46,
    y: 20,
    width: 20,
    delay: 0.5,
  },
  {
    id: "membrane",
    title: "Membranes & Advanced Separation",
    category: "04",
    description:
      "High-performance membrane filtration systems and advanced separation solutions.",
    image: "/images/industrial_showcase/membrane.png",
    x: 59,
    y: 27,
    width: 15,
    delay: 0.8,
  },
  {
    id: "green-process",
    title: "Green Process Technologies",
    category: "03",
    description:
      "Sustainable industrial processes and environmentally responsible technologies.",
    image: "/images/industrial_showcase/green-process.png",
    x: 26,
    y: 41,
    width: 18,
    delay: 1.1,
  },
  {
    id: "water-treatment",
    title: "Water & Wastewater Treatment",
    category: "06",
    description:
      "Industrial water treatment, clarification and wastewater management systems.",
    image: "/images/industrial_showcase/water-treatment.png",
    x: 31,
    y: 62.5,
    width: 17,
    delay: 1.4,
  },
  {
    id: "solar-building",
    title: "Solar Infrastructure",
    category: "07",
    description:
      "Industrial infrastructure designed for sustainable energy applications.",
    image: "/images/industrial_showcase/solar-building.png",
    x: 41,
    y: 67,
    width: 15,
    delay: 2,
  },
  {
    id: "solar-panels",
    title: "Solar Energy Systems",
    category: "08",
    description:
      "Solar photovoltaic systems for clean and efficient energy generation.",
    image: "/images/industrial_showcase/solar-panels.png",
    x: 47,
    y: 75,
    width: 14,
    delay: 2.3,
  },
  {
    id: "storage",
    title: "Hydrogen & New Energy",
    category: "05",
    description:
      "Advanced hydrogen storage, industrial gas handling and next-generation energy infrastructure.",
    image: "/images/industrial_showcase/storage-tanks.png",
    x: 56,
    y: 67,
    width: 13,
    delay: 2.6,
  },
  {
    id: "utility-building-1",
    title: "Industrial Utility Infrastructure",
    category: "10",
    description:
      "Supporting utility infrastructure for industrial operations.",
    image: "/images/industrial_showcase/utility-building.png",
    x: 49,
    y: 42.5,
    width: 12,
    delay: 2.9,
  },
  {
    id: "utility-building-2",
    title: "Industrial Support Facilities",
    category: "11",
    description:
      "Essential facilities supporting integrated industrial processes.",
    image: "/images/industrial_showcase/utility-building.png",
    x: 52.5,
    y: 45,
    width: 12,
    delay: 3.1,
  },
  {
    id: "utility-building-3",
    title: "Industrial Support Facilities",
    category: "11",
    description:
      "Essential facilities supporting integrated industrial processes.",
    image: "/images/industrial_showcase/utility-building.png",
    x: 37,
    y: 54,
    width: 14,
    delay: 3.1,
  },
  {
    id: "utility-building-4",
    title: "Industrial Support Facilities",
    category: "11",
    description:
      "Essential facilities supporting integrated industrial processes.",
    image: "/images/industrial_showcase/utility-building.png",
    x: 44,
    y: 73,
    width: 9,
    delay: 3.1,
  },
];

// ============================================
// TREE POSITIONS
// Three different sizes and appearances
// Coordinates use the SAME stage as the frame
// ============================================

const treePositions: TreePosition[] = [
  // Existing trees
  { x: 34, y: 36, size: 3.4, variant: "large" },
  { x: 39, y: 43, size: 2.2, variant: "small" },
  { x: 53, y: 39, size: 2.8, variant: "medium" },
  { x: 74, y: 45, size: 3.4, variant: "large" },
  { x: 32, y: 58, size: 2.8, variant: "medium" },
  { x: 47, y: 57, size: 2.2, variant: "small" },
  { x: 57, y: 59, size: 3.4, variant: "large" },
  { x: 73, y: 62, size: 2.8, variant: "medium" },
  { x: 36, y: 76, size: 3.4, variant: "large" },
  { x: 49, y: 85, size: 2.2, variant: "small" },
  { x: 73, y: 84, size: 2.8, variant: "medium" },

  // Additional trees
  { x: 44, y: 32, size: 2.2, variant: "small" },
  { x: 63, y: 48, size: 3.4, variant: "large" },
  { x: 29, y: 69, size: 2.2, variant: "small" },
  { x: 57, y: 77, size: 2.8, variant: "medium" },
  { x: 67, y: 54, size: 2.2, variant: "small" },
  { x: 42, y: 82, size: 2.8, variant: "medium" },
];

// ============================================
// WIND TURBINE POSITION
// ============================================

const windTurbinePosition = {
  x: 55,
  baseY: 69,
  width: 4.5,
};

// ============================================
// TREE SVG
// Three variations for natural appearance
// ============================================

function Tree({ variant }: { variant: TreePosition["variant"] }) {
  return (
    <svg
      viewBox="0 0 80 100"
      className="h-full w-full overflow-visible"
    >
      {/* Ground shadow */}
      <ellipse
        cx="40"
        cy="91"
        rx="22"
        ry="6"
        fill="#8da96e"
        opacity=".4"
      />

      {/* Trunk */}
      <path
        d="M36 65 L35 90 L45 90 L44 65Z"
        fill="#93643d"
      />

      {/* Small tree */}
      {variant === "small" && (
        <g>
          <circle cx="40" cy="53" r="20" fill="#369b2c" />
          <circle cx="29" cy="48" r="15" fill="#59bf39" />
          <circle cx="51" cy="46" r="14" fill="#43a92d" />
          <circle cx="40" cy="35" r="15" fill="#73d64c" />
          <circle cx="33" cy="35" r="5" fill="#a1ed68" />
          <circle cx="52" cy="48" r="4" fill="#80dc4f" />
        </g>
      )}

      {/* Medium tree */}
      {variant === "medium" && (
        <g>
          <ellipse cx="40" cy="52" rx="25" ry="23" fill="#369b2c" />
          <ellipse cx="28" cy="44" rx="17" ry="19" fill="#5dbd3b" />
          <ellipse cx="51" cy="42" rx="17" ry="19" fill="#43a92d" />
          <ellipse cx="40" cy="29" rx="17" ry="19" fill="#75d84a" />
          <ellipse cx="31" cy="35" rx="6" ry="8" fill="#a1ed68" opacity=".8" />
          <circle cx="53" cy="43" r="5" fill="#80dc4f" />
        </g>
      )}

      {/* Large tree */}
      {variant === "large" && (
        <g>
          <ellipse cx="40" cy="53" rx="29" ry="27" fill="#329329" />
          <ellipse cx="25" cy="44" rx="20" ry="22" fill="#50b735" />
          <ellipse cx="56" cy="43" rx="19" ry="22" fill="#389c27" />
          <ellipse cx="40" cy="27" rx="20" ry="22" fill="#70d343" />
          <ellipse cx="27" cy="33" rx="7" ry="9" fill="#a4ed67" opacity=".8" />
          <circle cx="54" cy="34" r="6" fill="#8be35a" />
          <circle cx="19" cy="48" r="5" fill="#76d84b" />
          <circle cx="44" cy="53" r="6" fill="#5ebd36" />
        </g>
      )}
    </svg>
  );
}

// ============================================
// ANIMATED WIND TURBINE
// ============================================

function WindTurbine() {
  return (
    <svg
      viewBox="0 0 160 260"
      className="h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient id="towerGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#aebdca" />
          <stop offset="35%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#8799a8" />
        </linearGradient>
      </defs>

      {/* Tower */}
      <path
        d="M73 83 L86 83 L99 245 L60 245 Z"
        fill="url(#towerGradient)"
        stroke="#718494"
        strokeWidth="1.3"
      />

      {/* Base */}
      <ellipse cx="80" cy="245" rx="23" ry="5" fill="#b9c6ce" />
      <ellipse cx="80" cy="242" rx="19" ry="4" fill="#e5edf2" />

      {/* Nacelle */}
      <path
        d="M84 73 L119 68 Q127 69 127 78 Q127 85 118 87 L84 86Z"
        fill="#e9f0f5"
        stroke="#8498a8"
        strokeWidth="1.2"
      />

      {/* Rotating blades */}
      <motion.g
        style={{ transformOrigin: "80px 80px" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 120, 240].map((angle) => (
          <path
            key={angle}
            d="M80 80 C72 55 75 25 80 5 C85 25 88 55 80 80Z"
            fill="#f3f7fa"
            stroke="#9aabb9"
            strokeWidth="1"
            transform={`rotate(${angle} 80 80)`}
          />
        ))}

        <circle
          cx="80"
          cy="80"
          r="9"
          fill="#dce5eb"
          stroke="#718494"
          strokeWidth="1.5"
        />

        <circle cx="80" cy="80" r="4" fill="#ffffff" />
      </motion.g>
    </svg>
  );
}

// ============================================
// INFORMATION CARD
// ============================================

function InfoCard({ item }: { item: IndustrialItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-full left-1/2 z-[110] mb-4 w-64 max-w-[75vw] -translate-x-1/2 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-bold tracking-widest text-red-600">
          {item.category}
        </span>
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <h3 className="text-sm font-bold leading-snug text-gray-900">
        {item.title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-gray-600">
        {item.description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
          Explore our capabilities
        </span>
        <span className="text-sm text-red-600">→</span>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function IndustrialShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full overflow-visible bg-white py-16">
      <div className="mx-auto w-full max-w-[1250px] px-4">

        {/* ================================== */}
        {/* RESPONSIVE ILLUSTRATION CANVAS */}
        {/* All layers share this exact canvas */}
        {/* ================================== */}

        <div
          className="relative mx-auto w-full aspect-[3/2] overflow-visible"
        >

          {/* ================================== */}
          {/* BACKGROUND FRAME */}
          {/* ================================== */}

          <img
            src="/images/industrial_showcase/industrial-frame.png"
            alt="Industrial infrastructure"
            draggable={false}
            className="pointer-events-none absolute inset-0 z-0 block h-full w-full select-none object-fill"
          />

          {/* ================================== */}
          {/* BACKGROUND TREES */}
          {/* ================================== */}

          {treePositions.map((tree, index) => (
            <motion.div
              key={`tree-${index}`}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 180,
                damping: 12,
              }}
              style={{
                left: `${tree.x}%`,
                top: `${tree.y}%`,
                width: `${tree.size}%`,
                aspectRatio: "4 / 5",
                zIndex: 5,
              }}
              className="pointer-events-none absolute"
            >
              <Tree variant={tree.variant} />
            </motion.div>
          ))}

          {/* ================================== */}
          {/* INDUSTRIAL ELEMENTS */}
          {/* ================================== */}

          {industrialItems.map((item) => {
            const isActive = activeId === item.id;
            const isHoverable = HOVERABLE_ITEM_IDS.has(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: item.delay,
                  type: "spring",
                  stiffness: 170,
                  damping: 11,
                  mass: 0.8,
                }}

                // Hover only on the six selected items
                whileHover={
                  isHoverable
                    ? {
                        scale: 1.2,
                        y: -18,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 15,
                        },
                      }
                    : undefined
                }

                onHoverStart={
                  isHoverable
                    ? () => setActiveId(item.id)
                    : undefined
                }

                onHoverEnd={
                  isHoverable
                    ? () => setActiveId(null)
                    : undefined
                }

                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  width: `${item.width}%`,
                  zIndex: isActive ? 100 : 10,
                }}

                className={`absolute ${
                  isHoverable
                    ? "cursor-pointer"
                    : "pointer-events-none"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="h-auto w-full select-none object-contain drop-shadow-md"
                />

                <AnimatePresence>
                  {isHoverable && isActive && (
                    <InfoCard item={item} />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* ================================== */}
          {/* WIND TURBINE */}
          {/* ================================== */}

          <div
            className="pointer-events-none absolute"
            style={{
              left: `${windTurbinePosition.x}%`,
              top: `${windTurbinePosition.baseY}%`,
              width: `${windTurbinePosition.width}%`,
              aspectRatio: "8 / 13",
              transform: "translate(-50%, -100%)",
              zIndex: 12,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 2.7,
                type: "spring",
                stiffness: 160,
                damping: 12,
              }}
              className="h-full w-full"
            >
              <WindTurbine />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
