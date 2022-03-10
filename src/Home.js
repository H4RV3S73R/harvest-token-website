import React from 'react';
import 'bulma/css/bulma.css';
import TypeWriterEffect from 'react-typewriter-effect';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PieChart from './components/PieChart';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaWalking } from 'react-icons/fa';


import t1 from './assets/harvest-main-800-600.png';
import t2 from './assets/harvest-m1-800-600.png';
import general from './assets/harvest-general-1200-300.png';
import key from './assets/harvest-key-1200-300.png';

export const Home = () => (
    <>


        <div class="columns is-vcentered is-centered has-text-centered">
            <div class="column">
                <p class="is-size-1"><strong>HARVEST HST</strong> ERC20 Token</p>
                <p class="has-text-centered">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            textAlign: "center",
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
            <div class="column is-8">
                <img src={t1} alt="Harvest HST ERC20 Token"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        opacity: "100%",
                        width: '100%',
                    }} />
            </div>
        </div>

        <div class="columns is-vcentered has-text-justified">

            <div class="column">
                <img src={t2} alt="All your need about Social Media"
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        opacity: "100%",
                        width: '100%',
                    }} />
            </div>

            <div class="column">
                <div class="block">
                    <strong>HARVEST</strong> helps maintain the sustainability of water sources of the ecosystem. In today`s
                    world we just people realized the sources are not limitless and we as a people are responsible for any other people
                    and species as well. In the beginning, we were thinking about what we could do to save the water for tomorrow,
                    we realized saving the water is only possible with care before educating the people.
                </div>
                <div class="block">
                    We believe we can unite the people,
                    we can explain what is pollution in true meaning to protect our planet for future. And all we can work together by hand in hand.
                </div>

                <div class="block">
                    All we have been witnessed lots of harm and irrevocable demolitions
                    by some of the well-educated people in history. Before starting to
                    educate people there is something we need to do.

                    Now we have learned that care is more important than anything.
                </div>
                <div class="block">
                    At
                    this point, we have been missioned to explain to the people what is
                    the benefit of saving water for tomorrow.

                    We believe we can unite the people, we can explain what is pollution in
                    true meaning to protect our planet for future. And all we can work together
                    by hand in hand.
                </div>
                <div class="content">
                    <blockquote>
                        Follow us, we know the path, we are the <strong>H4RV3S73R</strong>.
                    </blockquote>
                </div>
            </div>
        </div>

        <hr />

        <div class="columns is-unselectable has-text-justified">

            <div class="column has-text-centered"
                style={{
                    backgroundImage: "url(" + general + ")",
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
                <p>Max Total Supply: <strong>10 000 000 $HST</strong></p>
                <p>Type: <strong>ERC-20</strong></p>
                <p>Network: <strong>Avalanche Mainnet</strong></p>
                <p>Decimals: <strong>18</strong></p>
                <p>Owner: <strong>0xB06371532B0fEb5e1c4f5FB77Ec349CC5d514Fd7</strong></p>
                <p>Contract Addresses: <strong>0x96cb2c3E8f9Bcb22cA40B89AdF259c2642A6FF30</strong></p>
            </div>
            <div class="column">
                <PieChart />
            </div>

        </div>

        <hr />
        <div class="has-text-centered">
            <p class="tag is-size-3 is-info tag is-rounded has-text-centered">Key Points</p>
            <p>&nbsp;</p>
        </div>

        <div class="columns is-unselectable has-text-justified"
            style={{
                backgroundImage: "url(" + key + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
            }}>

            <div class="column has-text-centered">
                <p class="tag is-size-4 is-danger tag is-rounded">Mintable</p>
                <p>Privileged accounts are <strong class="is-underlined">NOT</strong> able to create more supply.</p>
            </div>
            <div class="column has-text-centered">
                <p class="tag is-size-4 is-success tag is-rounded">Burnable</p>
                <p>Token holders are able to destroy their tokens.</p>
            </div>
            <div class="column has-text-centered">
                <p class="tag is-size-4 is-danger is-small tag is-rounded">Pausable</p>
                <p>Privileged accounts can <strong class="is-underlined">NOT</strong> pause the functionality.</p>
            </div>
            <div class="column has-text-centered">

                <p class="tag is-size-4 is-danger is-rounded">Permit</p>
                <p>Without paying gas, token holders are <strong class="is-underlined">NOT</strong> able to allow third parties to transfer from their account.</p>

            </div>
            <div class="column has-text-centered">
                <p class="tag is-size-4 is-success tag is-rounded">Votes</p>
                <p>Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account.</p>
            </div>
            <div class="column has-text-centered">
                <p class="tag is-size-4 is-success tag is-rounded">Snapshots</p>
                <p>Privileged accounts will be able to store snapshots of balances that can be retrieved later.</p>
            </div>
            <div class="column has-text-centered">
                <p class="tag is-size-4 is-success tag is-rounded">Access Control: Roles</p>
                <p>Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts.</p>
            </div>

        </div>

        <div class="columns">
            <div class="column">
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaWalking />}
                    >
                        <h3 className="vertical-timeline-element-title">Phase I</h3>
                        <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                        <p>
                            Website
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="April, 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaWalking />}
                    >
                        <h3 className="vertical-timeline-element-title">Phase II</h3>
                        <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                        <p>
                            Listing on DEX
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May, 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaWalking />}
                    >
                        <h3 className="vertical-timeline-element-title">Phase III</h3>
                        <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                        <p>
                            Airdrop
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="March 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaWalking />}
                    >
                        <h3 className="vertical-timeline-element-title">Phase IV</h3>
                        <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                        <p>
                            Start funding water wells in Africa
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Phase V</h3>
                        <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                        <p>
                            Harvest DAO will on board.
                        </p>
                    </VerticalTimelineElement>
                    
                </VerticalTimeline>

            </div>




        </div>

    </>
)