import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import i18next from 'i18next';

class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    }
  }

  handleChangeDate(date) {
    this.setState((state) => {
      return {
        ...state,
        date
      }
    });

    const timestamp = moment(date).unix();
    this.props.onDateChange(timestamp);
  }

  subDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() - days)
    return copy
  }

  addDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
  }

  render() {
    return (
      <div className="select-date">
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={this.state.date}
          placeholderText={i18next.t("SELECT_DATE")}
          onChange={date => this.handleChangeDate(date)}
          minDate={this.subDays(new Date(), 30)}
          maxDate={this.addDays(new Date(), 8)}
          showDisabledMonthNavigation
          tabIndex="3"
        />
      </div>
    );
  }
}

SelectDate.propTypes = {
  onDateChange: PropTypes.func
};

export default SelectDate;