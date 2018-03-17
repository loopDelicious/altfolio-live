import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './images/logo.svg';
import './Header.css';

class Header extends Component {
  static propTypes = {
    lastUpdate: PropTypes.instanceOf(Date),
    updateChangeWindow: PropTypes.func,
    changeWindow: PropTypes.string
  };

  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 1000)
  }

  render() {
    const totalSeconds = Math.round((new Date() - this.props.lastUpdate) / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    return <header className="Header">
      <div className="Header-container">
        <section>
          <img src={logo} alt="Altfolio"/>
        </section>
        <div className="Header-change-selector">
          <div className="Header-change-selector-label Header-optional">show change:</div>
          <section className="radio-group">
            <div className={`radio-group-option ${this.props.changeWindow === 'percent_change_last_visit' ? 'selected' : ''}`} onClick={this.props.updateChangeWindow.bind(this, 'percent_change_last_visit')}>since last visit</div>
            <div className={`radio-group-option ${this.props.changeWindow === 'percent_change_1h' ? 'selected' : ''}`} onClick={this.props.updateChangeWindow.bind(this, 'percent_change_1h')}>1h</div>
            <div className={`radio-group-option ${this.props.changeWindow === 'percent_change_24h' ? 'selected' : ''}`} onClick={this.props.updateChangeWindow.bind(this, 'percent_change_24h')}>24h</div>
            <div className={`radio-group-option ${this.props.changeWindow === 'percent_change_7d' ? 'selected' : ''}`} onClick={this.props.updateChangeWindow.bind(this, 'percent_change_7d')}>7d</div>
          </section>
        </div>
        <button className="sign-in radio-group">Sign in</button>
      </div>
      <div className="Header-subheader">
        <div className="Header-subheader-container">
          <span className="Header-optional">Live from CoinMarketCap</span>
          <span className="Header-subheader-middot symbol Header-optional">&middot;</span>
          <span>Updated {totalMinutes > 0 ? `${totalMinutes}m ` : null}{totalSeconds % 60}s ago</span>
          <span className="Header-subheader-data-policy">
            <svg className="Header-subheader-data-policy-lock" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/>
            </svg>
            All data stored locally
          </span>
        </div>
      </div>
    </header>;
  }
}

export default Header;
