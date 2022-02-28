import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import TypeWriterEffect from 'react-typewriter-effect';

import harvest from './assets/harvester-back-1280-300.png';
import back1 from './assets/harvester-back-600-300-1.png';
import back2 from './assets/harvester-back-600-300-2.png';
import back4 from './assets/harvester-back-600-300-4.png';

export const Home = () => (
    <>
        <section class="hero"
            style={{
                backgroundImage: "url(" + harvest + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
            }}>
            <div class="hero-body">
                <div class="columns is-unselectable">
                    <div class="column has-text-justified">
                        <p class="title is-size-1">
                            Harvest HST
                        </p>
                        <p class="subtitle is-left">
                            ERC20 Token
                        </p>
                        <p>
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Red Hat Display',
                                    color: '#3F3D56',
                                    fontWeight: 600,
                                    fontSize: '1.5em',
                                }}
                                startDelay={2000}
                                cursorColor="#3F3D56"
                                multiText={[
                                    'Mintable: NOT.',
                                    'Burnable: YES.',
                                    'Pausable: NO.',
                                    'Permit: NOT.',
                                    'Votes: YES.',
                                    'Snapshots: YES.',
                                    'Access Control - Roles: YES.',
                                    'We are the H4RV3S73R.',
                                ]}
                                multiTextDelay={1000}
                                multiTextLoop={200}
                                typeSpeed={50}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <hr />

        <div class="columns is-unselectable has-text-justified">
            <div class="column"
                style={{
                    backgroundImage: "url(" + back1 + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                }}>
                 <p><span><i class="fa-solid fa-angles-right"></i></span></p>

  <span class="icon is-medium"><i class="fas fa-heading fa-2x"></i></span><strong>ARVEST (aka H4RV3ST)</strong> helps maintain the sustainability of
                water sources of the ecosystem. In today`s world we just
                people realized the sources are not limitless and we as a
                people are responsible for any other people and species as well.
                In the beginning, we were thinking about what we could do to save
                the water for tomorrow, we realized saving the water is only possible
                with care before educating the people.
                We believe we can unite the people, we can explain what is pollution in
                true meaning to protect our planet for future. And all we can work together
                by hand in hand.
            </div>
            <div class="column"
                style={{
                    backgroundImage: "url(" + back2 + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                }}>
                <p><span><i class="fa-solid fa-angles-down"></i></span></p> 
                All we have been witnessed lots of harm and irrevocable demolitions
                by some of the well-educated people in history. Before starting to
                educate people there is something we need to do.

                Now we have learned that care is more important than anything. At
                this point, we have been missioned to explain to the people what is
                the benefit of saving water for tomorrow.

                We believe we can unite the people, we can explain what is pollution in
                true meaning to protect our planet for future. And all we can work together
                by hand in hand. Follow us, we know the path, we are the <strong>H4RV3S73R</strong>.
            </div>
        </div>

        <hr />

        <div class="columns is-unselectable has-text-justified">
            <div class="column has-text-centered"
                style={{
                    backgroundImage: "url(" + back4 + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                }}>

                <div class="has-text-centered">
                    <p class="tag is-size-3 is-info tag is-rounded has-text-centered">General Information</p>
                    <p>&nbsp;</p>
                </div>
                <p>Token Name: <strong>HARVEST</strong></p>
                <p>Abbreviation: <strong>HST</strong></p>
                <p>Max Total Supply: <strong>10,000,000 $HST</strong></p>
                <p>Type: <strong>ERC-20</strong></p>
                <p>Networks: <strong>AVAX</strong></p>
                <p>Decimals: <strong>18</strong></p>
                <p>Owner: <strong>0xB06371532B0fEb5e1c4f5FB77Ec349CC5d514Fd7</strong></p>
                <p>Contract Addresses: <strong>0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30</strong></p>
            </div>
        </div>
        <hr />
        <div class="has-text-centered">
            <p class="tag is-size-3 is-info tag is-rounded has-text-centered">Key Points</p>
            <p>&nbsp;</p>
        </div>
        <div class="columns is-unselectable has-text-justified"
            style={{
                backgroundImage: "url(" + harvest + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
            }}>

            <div class="column">
                <p class="tag is-size-4 is-danger tag is-rounded has-text-centered">Mintable</p>
                <p>Privileged accounts are <strong class="is-underlined">NOT</strong> able to create more supply.</p>
            </div>
            <div class="column">
                <p class="tag is-size-4 is-success tag is-rounded has-text-centered">Burnable</p>
                <p>Token holders are able to destroy their tokens.</p>
            </div>
            <div class="column">
                <p class="tag is-size-4 is-danger is-small tag is-rounded has-text-centered">Pausable</p>
                <p>Privileged accounts can <strong class="is-underlined">NOT</strong> pause the functionality.</p>
            </div>
            <div class="column">
            
                <p class="tag is-size-4 is-danger is-rounded has-text-centered">Permit</p>
                <p>Without paying gas, token holders are <strong class="is-underlined">NOT</strong> able to allow third parties to transfer from their account.</p>

            </div>
            <div class="column">
                <p class="tag is-size-4 is-success tag is-rounded has-text-centered">Votes</p>
                <p>Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account.</p>
            </div>
            <div class="column">
                <p class="tag is-size-4 is-success tag is-rounded has-text-centered">Snapshots</p>
                <p>Privileged accounts will be able to store snapshots of balances that can be retrieved later.</p>
            </div>
            <div class="column">
                <p class="tag is-size-4 is-success tag is-rounded has-text-centered">Access Control: Roles</p>
                <p>Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts.</p>
            </div>
        </div>

    </>
)