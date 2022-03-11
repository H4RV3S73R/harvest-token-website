import React from 'react';
import 'bulma/css/bulma.min.css';
import TypeWriterEffect from 'react-typewriter-effect';
import { FaFlagCheckered, FaTwitter, FaGithub } from 'react-icons/fa';

import t from '../assets/harvest-logo-500-300.png';

export const Footer = () => (
  <>

    <footer className="footer is-unselectable">

      <div class="columns is-centered is-justified is-unselectable">

        <div class="column">
          <div class="content is-size-6">
            <p class="has-text-centered">
              <img src={t} alt="Harvest" width="200px" height="100px" />
            </p>
            <p class="is-size-7">
              <TypeWriterEffect
                textStyle={{
                  textAlign: "center",
                  color: "#4BB543",
                }}
                startDelay={1500}
                cursorColor="#3F3D56"
                multiText={[
                  'We are HARVESTER.',
                  'a.k.a.',
                  'H4RV3S73R.',
                  'Hic et ubique terarum.',
                ]}
                multiTextDelay={1500}
                multiTextLoop={200}
                typeSpeed={50}
              />
            </p>
            <p>
              <center>© {new Date().getFullYear()} | <strong>HARVEST</strong></center>
            </p>

          </div>
        </div>

        <div class="column">
          <div class="content">

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
                <a href="https://snowtrace.io/address/0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30#code" target="_new" title="HARVEST on SnowTrace"><FaFlagCheckered /> Verified Contract</a>
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