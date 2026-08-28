import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
  },
  themeVariables: {
    fontSize: "16px",
  },
});

export async function runMermaidDiagrams() {
  await mermaid.run();
}
