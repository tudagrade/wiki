import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="Willkommen!">
      <SEO title="Willkommen!" />
      <p>Wähle links die Seite zu dem Thema aus, zu dem du Hilfe benötigst.</p>
      <p>Bei Fragen stehen wir dir im Moodle-Kurs und in den Sprechstunden zur Verfügung.</p>
    </Layout>
  );
}
