export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <header style={{ marginBottom: "3rem" }}>
        <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
          Multimodal data platform
        </p>
        <h1 style={{ fontSize: "2.75rem", fontWeight: 700 }}>TensorGrid</h1>
        <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "var(--muted)" }}>
          Build and iterate faster. TensorGrid surfaces the right data insights
          to maximize AI performance across images, video, and 3D data.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          marginBottom: "3rem",
        }}
      >
        {[
          ["Data Curation", "Slice, search, and filter massive datasets."],
          ["Annotation", "Label and QA workflows in one interactive app."],
          ["Model Evaluation", "Find failure modes and improve model quality."],
        ].map(([title, desc]) => (
          <article
            key={title}
            style={{
              padding: "1.25rem",
              borderRadius: 12,
              border: "1px solid #1e293b",
              background: "#14142a",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{desc}</p>
          </article>
        ))}
      </section>

      <section style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="http://localhost:5151"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.75rem 1.25rem",
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          Launch App
        </a>
        <a
          href="https://github.com/voxel51/fiftyone"
          style={{
            border: "1px solid #334155",
            padding: "0.75rem 1.25rem",
            borderRadius: 8,
          }}
        >
          Upstream (FiftyOne)
        </a>
      </section>

      <footer style={{ marginTop: "4rem", color: "var(--muted)", fontSize: "0.875rem" }}>
        TensorGrid is derived from FiftyOne (Apache 2.0). See NOTICE in the repo.
      </footer>
    </main>
  );
}
