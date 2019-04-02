import React from "react"
import { Link } from "gatsby"

import "./index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="A louer à Thoiry, Pays de Gex"
      keywords={[`Pays de Gex`, `Thoiry`, `louer`, `habiter`, `Maison`]}
    />
    <div>
      <section className="main__section">
        <Image />
        <div>
          <h1>A louer à Thoiry, Pays de Gex (France):</h1>
          <p>
            Maison de caractère de 1850 (220m2) entiérement rénovée. Magnifique
            jardin (1200m2) clôturé, ensoleillé et calme, belle terrasse avec
            vue sur le Mont-Blanc et terasse couverte dans la grange attaché à
            la maison. Grand salon/salle à manger (45 m2), cuisine equipée, 5
            chambres, 2 salles de bains, cave voutée, garage, dépandances,
            chauffage à gaz. Proche du bus Y, grand centre commercial, école
            primaire au village.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
