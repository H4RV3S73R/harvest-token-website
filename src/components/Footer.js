import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


export const Footer = () => (
  <>

    <footer className="footer has-background-white">


      <div className="content has-text-centered">



        <div>
        <p><span><i className="fas fa-arrow-down" title="Follow us on"> Contact - Follow us on</i> <i className="fas fa-arrow-down" title="Follow us on"></i></span></p>

          <h2>

            <span className="icon-text has-text-info">

       
            <span className="icon">
                <a href="tel:+447342937730" target="_new" title="Telephone"><i className="fas fa-phone" title="Telephone"> </i></a>
              </span>

              <span className="icon">
                <a href="https://wa.link/r1n1com" target="_new" title="R1N1 on Whatsapp"><i className="fab fa-whatsapp" title="R1N1 on Whatsapp"> </i></a>
              </span>

              <span className="icon">
                <a href="https://www.instagram.com/r1n1com" target="_new" title="R1N1 on Instagram"><i className="fab fa-instagram" title="R1N1 on Instagram"></i></a>
              </span>

              <span className="icon">
                <a href="https://www.facebook.com/r1n1com" target="_new" title="R1N1 on Facebook"><i className="fab fa-facebook" title="R1N1 on Facebook"></i></a>
              </span>

              <span className="icon">
                <a href="https://www.twitter.com/r1n1com_" target="_new" title="R1N1 on Twitter"><i className="fab fa-twitter" title="R1N1 on Twitter"></i></a>
              </span>

              <span className="icon">
                <a href="https://www.youtube.com/c/r1n1com" target="_new" title="R1N1 on Youtube"><i className="fab fa-youtube" title="R1N1 on Youtube"></i></a>
              </span>

              <span className="icon">
                <a href="https://www.linkedin.com/company/r1n1com/" target="_new" title="R1N1 on LinkeIn"><i className="fab fa-linkedin" title="R1N1 on LinkeIn"></i></a>
              </span>

              <span className="icon">
                <a href="https://www.pinterest.co.uk/r1n1com/" target="_new" title="R1N1 on Pinterest"><i className="fab fa-pinterest" title="R1N1 on Pinterest"></i></a>
              </span>

            </span>
            <p></p>

          </h2>

        </div>

        <p>
          <span> © {new Date().getFullYear()} | <strong>R1N1 LTD</strong> on <a href="https://beta.companieshouse.gov.uk/company/13218580" target="_new">Companies House |</a></span>
          <span> <a href="/PrivacyPolicy" title="R1N1 Privacy Policy">Privacy Policy</a></span>

        </p>

      </div>

    </footer>

  </>
)
