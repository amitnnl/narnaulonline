"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Logo3DProps {
  width?: number;
  height?: number;
  interactive?: boolean;
  className?: string;
}

export default function Logo3D({
  width = 142,
  height = 34,
  interactive = true,
  className = "",
}: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current || isSpinning) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Smooth 3D tilt angles (max +/- 18 degrees)
    const rotateY = Number(((x / (rect.width / 2)) * 18).toFixed(2));
    const rotateX = Number((-(y / (rect.height / 2)) * 18).toFixed(2));

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setRotation({ x: 0, y: 0 });
    }, 900);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current || isSpinning || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left - rect.width / 2;
    const y = touch.clientY - rect.top - rect.height / 2;

    const rotateY = Number(((x / (rect.width / 2)) * 16).toFixed(2));
    const rotateX = Number((-(y / (rect.height / 2)) * 16).toFixed(2));
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`logo-3d-stage ${className} ${isSpinning ? "is-spinning" : ""} ${isHovered ? "is-active" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      title="3D Animated Interactive Logo • Tilt with cursor or tap to spin 360°"
    >
      {/* Dynamic 3D Floor Shadow */}
      <div
        className="logo-3d-shadow"
        style={{
          transform: isHovered
            ? `translate3d(${-rotation.y * 0.7}px, ${rotation.x * 0.7 + 5}px, -20px) scale(0.94)`
            : undefined,
        }}
      />

      {/* 3D Card Layer */}
      <div
        className="logo-3d-card"
        style={{
          transform: isSpinning
            ? undefined
            : isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(16px)`
            : undefined,
        }}
      >
        {/* Hologram Light Sheen Reflection */}
        <div
          className="logo-3d-sheen"
          style={{
            transform: isHovered
              ? `translateX(${rotation.y * 3.5}%) translateY(${-rotation.x * 3.5}%)`
              : undefined,
          }}
        />

        {/* Ambient Hologram Glow Aura */}
        <div className="logo-3d-aura" />

        {/* Logo Image */}
        <Image
          src="/logo.png"
          alt="NarnaulOnline Studio"
          width={width}
          height={height}
          priority
          className="logo-3d-img"
          style={{ objectFit: "contain" }}
        />

        {/* Corner Specular Flare */}
        <span className="logo-3d-flare" />
      </div>
    </div>
  );
}
