import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="Path not found!">
      <SEO title="404: Not found" />
      <p>Dijkstra hat alle Pfade abgesucht, konnte die Seite aber nicht finden.</p>
    </Layout>
  );
}
