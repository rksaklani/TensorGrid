import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </span>
              <span className="logo-text">
                Tensor<span className="logo-accent">Grid</span>
              </span>
            </Link>
            <p>
              Multimodal data platform for building high-quality datasets and
              computer vision models.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <Link href="/product#curation">Data Curation</Link>
              </li>
              <li>
                <Link href="/product#annotation">Annotation</Link>
              </li>
              <li>
                <Link href="/product#evaluation">Model Evaluation</Link>
              </li>
              <li>
                <a href="http://localhost:5151">Launch App</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Developers</h4>
            <ul>
              <li>
                <Link href="/developers#install">Install</Link>
              </li>
              <li>
                <a
                  href="https://github.com/rksaklani/TensorGrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://pypi.org/project/tensorgrid-platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PyPI
                </a>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/enterprise">Enterprise</Link>
              </li>
              <li>
                <Link href="/customers">Customers</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <a
                  href="https://github.com/rksaklani/TensorGrid/blob/main/NOTICE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NOTICE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TensorGrid Contributors</span>
          <span>Derived from FiftyOne (Apache 2.0) · Voxel51, Inc.</span>
        </div>
      </div>
    </footer>
  );
}
