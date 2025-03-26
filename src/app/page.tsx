import React from "react";
import ProjectCard from "./components/ProjectCard"; // Pfad ggf. anpassen

interface Project {
  id: number;
  title: string;
  description: string;
  status: "offen" | "läuft" | "abgeschlossen";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projecthub",
    description: "Plattform für Swisscom-Lernendenprojekte",
    status: "läuft",
  },
  {
    id: 2,
    title: "Sitelab",
    description: "Interner Webseiten-Baukasten",
    status: "offen",
  },
  {
    id: 3,
    title: "AI Helper",
    description: "Eine Bewerbungshilfe mit KI",
    status: "abgeschlossen",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 Mini Projecthub</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 👉 Hier sollst du die ProjectCard-Komponente einbauen */}
      </div>
    </div>
  );
}
