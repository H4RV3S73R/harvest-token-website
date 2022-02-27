import React from 'react';
import 'bulma/css/bulma.css';
// import logo from './harvest-logo-200-200.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section class="hero">
          <div class="hero-body">
            <p class="title is-size-1">
              Harvest HST
            </p>
            <p class="subtitle has-text-centered">
              ERC20 Token
            </p>
          </div>
        </section>

        <div class="container">

          <div class="block">
            <strong>HARVEST (aka H4RV3ST)</strong> helps maintain the sustainability of
            water sources of the ecosystem. In today`s world we just
            people realized the sources are not limitless and we as a
            people are responsible for any other people and species as well.
          </div>
          <div class="block">
            In the beginning, we were thinking about what we could do to save
            the water for tomorrow, we realized saving the water is only possible
            with care before educating the people.
          </div>
          <div class="block">
            All we have been witnessed lots of harm and irrevocable demolitions
            by some of the well-educated people in history. Before starting to
            educate people there is something we need to do.
          </div>
          <div class="block">
            Now we have learned that care is more important than anything. At
            this point, we have been missioned to explain to the people what is
            the benefit of saving water for tomorrow.
          </div>
          <div class="block">
            We believe we can unite the people, we can explain what is pollution in
            true meaning to protect our planet for future. And all we can work together
            by hand in hand.
          </div>
          <div class="block">
            Follow us, we know the path, we are the <strong>H4RV3S73R</strong>.
          </div>

          < hr />

          <div class="columns">

            <div class="column is-half">
              <p class="title">Key Points</p>
              <p class="is-size-5"><strong>Mintable</strong>: Privileged accounts are <strong>NOT</strong> able to create more supply.</p>
              <p class="is-size-5"><strong>Burnable</strong>: Token holders are able to destroy their tokens.</p>
              <p class="is-size-5"><strong>Pausable</strong>: Privileged accounts can <strong>NOT</strong> pause the functionality.</p>
              <p class="is-size-5"><strong>Permit</strong>:  Without paying gas, token holders are <strong>NOT</strong> able to allow third parties to transfer from their account.</p>
              <p class="is-size-5"><strong>Votes</strong>: Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account.</p>
              <p class="is-size-5"><strong>Votes</strong>: Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account.</p>
              <p class="is-size-5"><strong>Snapshot</strong>: Privileged accounts will be able to store snapshots of balances that can be retrieved later.</p>
              <p class="is-size-5"><strong>Access Control - Roles</strong>: Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts.</p>
            </div>

            <vr />

            <div class="column is-half">
              <p class="title">General Information</p>
              <p class="is-size-5">Token Name: <strong>HARVEST</strong></p>
              <p class="is-size-5">Abbreviation: <strong>HST</strong></p>
              <p class="is-size-5">Max Total Supply: <strong>10,000,000 $HST</strong></p>
              <p class="is-size-5">Type: <strong>ERC-20</strong></p>
              <p class="is-size-5">Networks: <strong>AVAX</strong></p>
              <p class="is-size-5">Decimals: <strong>18</strong></p>
              <p class="is-size-5">Owner: <strong>0xB06371532B0fEb5e1c4f5FB77Ec349CC5d514Fd7</strong></p>
              <p class="is-size-5">Contract: <strong>0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30</strong></p>
              </div>

            </div>
          </div>

          <hr />

          <footer class="footer">
            <div class="content has-text-centered">
              <p>
                <strong>Harvest HST Token </strong> on AVAX <a href="https://snowtrace.io/address/0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30#code" target="_new">
                  Contract Source Code Verified</a>. The website built by <strong>BULMA</strong>.
              </p>
            </div>
          </footer>
      </header>
    </div>
  );
}

export default App;
