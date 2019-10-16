import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };

    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState((state) => {
      return {
        ...state,
        showList: !this.state.showList
      }
    });
  }

  getOptions() {
    const list = this.props.options.map(option => {
      return (
        <li key={option.id}
          onClick={() => this.props.onSelect(option)}
        >
          {option.name}
        </li>
      );
    });
    
    return list;
  }

  render() {
    const options = this.getOptions();

    if (this.state.showList) {
      return (
        <div className="select-dropdown" onClick={this.toggle}>
          <span>{this.props.selectedOption.name}</span>
          <img src="/img/triangle.png" alt="dropdown icon"/>
          <ul>
            {options}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="select-dropdown" onClick={this.toggle}>
          <span>{this.props.selectedOption.name}</span>
          <img src="/img/triangle.png" alt="dropdown icon"/>
        </div>
      );
    }
  }
}

SelectDropdown.propTypes = {
  selectedOption: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

export default SelectDropdown;