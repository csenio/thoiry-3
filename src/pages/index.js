import React from "react"

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
        <div className="image">
          <Image name="Thoiry_15.jpg" />
        </div>
        <div className="main__text">
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
          <h3>Prix</h3>
          <p>CHF 3400 (EUR 3000) par mois, disponible dès 16 juin 2019.</p>
          <h3>Contact</h3>
          <p>Henning Wuester, hwuester@yahoo.de, +491754789297</p>
        </div>
      </section>
      {/* <section>
        <div className="grid">
          <div><Image /></div>
          <div><Image /></div>
          <div><Image /></div>
        </div>
      </section> */}
    </div>
  </Layout>
)

export default IndexPage
