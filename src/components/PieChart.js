import React, { Component } from 'react'
import Chart from 'react-google-charts'
import 'bulma/css/bulma.css';

const pieData = [
    ['Total', 'value'],
    ['Airdrop', 1000000],
    ['Staking Rewards', 2000000],
    ['Fund Bonding', 2000000],
    ['Developer & Marketing Vesting', 1600000],
    ['Strategic Reserves', 1200000],
    ['Community Pool', 1200000],
    ['Foundation', 1000000],


]
const pieOptions = {
    title: '10 Million Total $HST Tokens',
    is3D: true,
    pieHole: 0.6,
    width: '100%',
    height: '400px',
    
}


class PieChart extends Component {
    render() {
        return (
            <div class="has-text-centered is-multiline">
   
                <Chart

                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={pieData}
                    options={pieOptions}
                    rootProps={{ 'data-testid': '3' }}
                />

            </div>
        )
    }
}
export default PieChart