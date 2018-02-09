import React, { Component } from 'react';

require('./styles.scss');

class RankingSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dota: true,
            csgo: false
        }

        this.dotaToggle = this.dotaToggle.bind(this);
        this.csgoToggle = this.csgoToggle.bind(this);
    }

    dotaToggle(event) {
        this.setState({
            dota: true,
            csgo: false
        })
    }

    csgoToggle(event) {
        this.setState({
            dota: false,
            csgo: true
        })
    }

    renderTable() {
        if (this.state.dota === true) {
            return (
                <div className="rankingSummary__content">
                    <table className="rankingSummary__table">
                        <thead>
                            <tr>
                                <th>
                                    Position
                                </th>
                                <th>
                                    Team
                                </th>
                                <th>
                                    Placement Points <strong>(PP)</strong>
                                </th>
                                <th>
                                    Win Percentage <strong>(%)</strong>
                                </th>
                                <th>
                                    Earnings <strong>(R)</strong>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>

                                <td>
                                    White Rabbit Gaming
                                </td>

                                <td>
                                    3450
                                </td>

                                <td>
                                    88.89%
                                </td>

                                <td>
                                    R289,000.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    2
                                </td>

                                <td>
                                    xTc Gaming
                                </td>

                                <td>
                                    2856
                                </td>

                                <td>
                                    54.55%
                                </td>

                                <td>
                                    R135,500.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    3
                                </td>

                                <td>
                                    Energy Esports
                                </td>

                                <td>
                                    2592
                                </td>

                                <td>
                                    53.85%
                                </td>

                                <td>
                                    R81,500.00
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                	4
                                </td>

                                <td>
                                    Aperture Gaming
                                </td>

                                <td>
                                    2401
                                </td>

                                <td>
                                    40.00%
                                </td>

                                <td>
                                    R52,000.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    5
                                </td>

                                <td>
                                    eXdee Gaming
                                </td>

                                <td>
                                    2358
                                </td>

                                <td>
                                    35.00%
                                </td>

                                <td>
                                    R38,000.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    6
                                </td>

                                <td>
                                    puLse Gaming
                                </td>

                                <td>
                                    1814
                                </td>

                                <td>
                                    33.33%
                                </td>

                                <td>
                                    R44,000.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    7
                                </td>

                                <td>
                                    Bravado Gaming
                                </td>

                                <td>
                                    1473
                                </td>

                                <td>
                                    43.48%
                                </td>

                                <td>
                                    R41,500.00
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    8
                                </td>

                                <td>
                                    Sinister5
                                </td>

                                <td>
                                    1173
                                </td>

                                <td>
                                    33.33%
                                </td>

                                <td>
                                    R27,500.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    9
                                </td>

                                <td>
                                    Mythic Gaming
                                </td>

                                <td>
                                    1171
                                </td>

                                <td>
                                    0.00%
                                </td>

                                <td>
                                    R5,500.00
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    10
                                </td>

                                <td>
                                    Veneration E-Sports
                                </td>

                                <td>
                                    900
                                </td>

                                <td>
                                    0.00%
                                </td>

                                <td>
                                    R5,500.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <div className="rankingSummary__content">
                <table className="rankingSummary__table">
                    <thead>
                        <tr>
                            <th>
                                Position
                            </th>
                            <th>
                                Team
                            </th>
                            <th>
                                Placement Points <strong>(PP)</strong>
                            </th>
                            <th>
                                Win Percentage <strong>(%)</strong>
                            </th>
                            <th>
                                Earnings <strong>(R)</strong>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>

                            <td>
                                Damage Control
                            </td>

                            <td>
                                3756
                            </td>

                            <td>
                                52.24%
                            </td>

                            <td>
                                R356,500.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                2
                            </td>

                            <td>
                                Bravado Gaming
                            </td>

                            <td>
                                3450
                            </td>

                            <td>
                                74.17%
                            </td>

                            <td>
                                R419,000.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                3
                            </td>

                            <td>
                                eXdee Gaming
                            </td>

                            <td>
                                2978
                            </td>

                            <td>
                                42.19%
                            </td>

                            <td>
                                R113,000.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                4
                            </td>

                            <td>
                                xTc Gaming
                            </td>

                            <td>
                                2795
                            </td>

                            <td>
                                46.42%
                            </td>

                            <td>
                                R143,000.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                5
                            </td>

                            <td>
                                Energy Esports
                            </td>

                            <td>
                                2241
                            </td>

                            <td>
                                55.99%
                            </td>

                            <td>
                                R182,000.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                6
                            </td>

                            <td>
                                White Rabbit Gaming
                            </td>

                            <td>
                                2108
                            </td>

                            <td>
                                46.90%
                            </td>

                            <td>
                                R52,500.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                7
                            </td>

                            <td>
                                Aperture Gaming
                            </td>

                            <td>
                                2108
                            </td>

                            <td>
                                41.03%
                            </td>

                            <td>
                                R52,000.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                8
                            </td>

                            <td>
                                Ventus Gaming
                            </td>

                            <td>
                                1807
                            </td>

                            <td>
                                35.40%
                            </td>

                            <td>
                                R98,500.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                9
                            </td>

                            <td>
                                puLse Gaming
                            </td>

                            <td>
                                1801
                            </td>

                            <td>
                                35.85%
                            </td>

                            <td>
                                R87,500.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                10
                            </td>

                            <td>
                                Veneration eSports
                            </td>

                            <td>
                                1391
                            </td>

                            <td>
                                53.55%
                            </td>

                            <td>
                                R99,000.00
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div className="rankingSummary">

                <div className="rankingSummary__header">

                    <span>
                        <img src={require('../../assets/images/png/rankings/header-icon.png')} alt="rankings icon" />
                    </span>

                    <h2>Rankings</h2>
                </div>

                <ul className="rankingSummary__list">
                    <li
                        className={(this.state.dota) ? 'rankingSummary__item active': 'rankingSummary__item'}
                        onClick={this.dotaToggle}
                        data-id="dota"
                    >
                        Dota
                    </li>
                    <li
                        className={(this.state.csgo) ? 'rankingSummary__item active': 'rankingSummary__item'}
                        onClick={this.csgoToggle}
                        data-id="csgo"
                    >
                        CS: GO
                    </li>
                </ul>

                {this.renderTable()}
            </div>
        )
    }
} 	

export default RankingSummary;
