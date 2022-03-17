import React from 'react';
import 'bulma/css/bulma.min.css';
import { FaFlagCheckered, FaTwitter, FaGithub } from 'react-icons/fa';

import t from '../assets/harvest-l-500-300.webp';

export const Footer = () => (
  <>

    <footer className="footer is-unselectable">

    <div class="columns is-unselectable">

<div class="column">
  <div class="content is-size-6 has-text-centered">
  <p>
              <img src={t} alt="Harvest" width="200px" height="100px" />
            </p>
            <p class="is-size-6 has-text-weight-bold">
              We are H4RV3S73R.
            </p>
            <p>
        © {new Date().getFullYear()} | <strong>HARVEST</strong>
            </p>
           
            <div class="add-button"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>                       
                          <button class="add-button" >Add to Home Screen</button>                      
                          </div>


          </div>
        </div>

        <div class="column">
        <div class="content is-size-6">

            <p>

              <b>General</b>

            </p>
            <ul>
              <li>
                <a href="https://github.com/H4RV3S73R" target="_new" title="HARVEST on Github"><FaGithub /> Github</a>
              </li>
              </ul>
              <p></p>
              <ul>
              <li>
                <a href="https://www.twitter.com/H4RV3S73R" target="_new" title="HARVEST on Twitter"><FaTwitter /> Twitter</a>
              </li>
              </ul>
              <p></p>
              <ul>
              <li>
                <a href="https://snowtrace.io/address/0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30#code" target="_new" title="HARVEST on Avalanche Mainnet"><FaFlagCheckered /> Verified Contract</a>
              </li>
            </ul>
          </div>
        </div>


        <div class="column">

        </div>

      </div>

    </footer>

  </>
)