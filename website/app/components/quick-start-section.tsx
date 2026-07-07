export function QuickStartSection() {
  return (
    <section className="section dev-section">
      <div className="container dev-grid">
        <div>
          <div className="code-block">
            <div className="code-header">
              <span>Terminal</span>
              <span>pip</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="comment"># Install TensorGrid</span>
                {"\n"}
                pip install tensorgrid-platform
                {"\n\n"}
                <span className="comment"># Quick start</span>
                {"\n"}
                <span className="keyword">import</span> tensorgrid{" "}
                <span className="keyword">as</span> tg
                {"\n"}
                <span className="keyword">import</span> tensorgrid.zoo{" "}
                <span className="keyword">as</span> tgz
                {"\n\n"}
                dataset = tgz.load_zoo_dataset(
                <span className="string">&quot;quickstart&quot;</span>)
                {"\n"}
                session = tg.launch_app(dataset)
                {"\n"}
                session.wait(-1)
              </code>
            </pre>
          </div>
        </div>

        <div>
          <div className="dev-links">
            <a
              href="https://github.com/rksaklani/TensorGrid"
              className="dev-link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="dev-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <strong>View on GitHub</strong>
                <span>rksaklani/TensorGrid — source, issues, releases</span>
              </div>
            </a>

            <a
              href="https://pypi.org/project/tensorgrid-platform/"
              className="dev-link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="dev-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <strong>PyPI Package</strong>
                <span>tensorgrid-platform — latest releases</span>
              </div>
            </a>

            <a href="http://localhost:5151" className="dev-link-card">
              <div className="dev-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div>
                <strong>Launch App</strong>
                <span>Open the interactive TensorGrid UI locally</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
