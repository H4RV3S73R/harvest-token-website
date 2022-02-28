import React from 'react';
import 'bulma/css/bulma.min.css';



export const Footer = () => (
  <>

    <footer className="footer">

      <div className="content has-text-centered">

        <p>
          <strong>Harvest HST Token </strong> on Avalanche Mainnet and <a href="https://snowtrace.io/address/0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30#code" target="_new">
          <strong class="is-underlined">Contract Source Code Verified</strong></a>. | The website built with <strong>BULMA</strong>.
        </p>
        <p>
          <span> © {new Date().getFullYear()} | <strong>Harvest</strong></span>
        </p>

      </div>

    </footer>

  </>
)