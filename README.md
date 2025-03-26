# 🚀 React Challenge – ProjectCard Bugfix

## 🎯 Ziel

In dieser Aufgabe wirst du eine React-Komponente (`ProjectCard`) in eine Seite einbinden und einen kleinen Bug beheben.

---

## 📋 Aufgabe

1. Du bekommst den Code für die Komponente `ProjectCard.tsx` (siehe unten).
2. In der Datei `page.tsx` findest du ein Array mit Projekten.
3. Deine Aufgabe ist es:
   - [ ] Die `ProjectCard`-Komponente in `page.tsx` korrekt zu **importieren und verwenden**
   - [ ] Für jedes Projekt aus dem Array eine Card anzuzeigen
   - [ ] Den **Bug in der Komponente zu finden und zu beheben** (der Status wird aktuell nicht angezeigt)
   - [ ] (Optional) Den Status farblich hervorzuheben (z. B. grün für „läuft“)

---
### 💡 Tipp

Um eine Komponente für jedes Projekt darzustellen, kannst du `.map()` verwenden:

```tsx
{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
```

## 📂 Dateien & Pfade

- 📁 `src/components/ProjectCard.tsx` → **Komponente**
- 📄 `src/app/page.tsx` → **Einbindung und Anzeige**

---

## 🧱 Beispiel-Projektdaten (in `page.tsx` vorhanden)

```tsx
const projects = [
  {
    id: 1,
    title: "Projecthub",
    description: "Plattform für Swisscom-Lernendenprojekte",
    status: "läuft"
  },
  {
    id: 2,
    title: "Sitelab",
    description: "Interner Webseiten-Baukasten",
    status: "offen"
  },
  {
    id: 3,
    title: "AI Helper",
    description: "Bewerbungshilfe mit KI",
    status: "abgeschlossen"
  }
];
```

## 🔧 Komponentencode – `ProjectCard.tsx`

```ts
interface ProjectProps {
  project: {
    title: string;
    description: string;
    status: "offen" | "läuft" | "abgeschlossen";
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
      <p className="text-sm text-gray-300 mb-2">{project.description}</p>
      <p className="text-xs font-bold">
        Status: {project.status === "läuft" || "offen" || "abgeschlossen"}
      </p>
    </div>
  );
}
