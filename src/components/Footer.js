import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'



export const Footer = () => (
  <>

    <footer className="footer">

      <div className="content has-text-centered">

        <p>
        <div>
        <p><span><i className="fas fa-arrow-down" title="Follow us on"> Contact - Follow us on</i> <i className="fas fa-arrow-down" title="Follow us on"></i></span></p>

          <h2>
            <span className="icon-text has-text-info">

              <span className="icon">
                <a href="https://github.com/H4RV3S73R" target="_new" title="HARVEST on Github"><i className="fab fa-github" title="HARVEST on Github"></i></a>
              </span>

              <span className="icon">
                <a href="https://www.twitter.com/H4RV3S73R" target="_new" title="HARVEST on Twitter"><i className="fab fa-twitter" title="HARVEST on Twitter"></i></a>
              </span>

            </span>

          </h2>
        </div>

        </p>

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