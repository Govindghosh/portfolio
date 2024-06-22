"use client"
import React, { useState } from 'react'

export default function Project() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const handleExpandClick = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
      };
  return (
    <div>Featured Projects</div>
  )
}
