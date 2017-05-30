import React from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

import GoogleMap from "../components/google-map";
import Chart from "../components/chart";


class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name,
          temps = cityData.list.map(weather => weather.main.temp - 273),
          pressures = cityData.list.map(weather => weather.main.pressure),
          humidities = cityData.list.map(weather => weather.main.humidity),
          { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

function mapStateToProps({ weather }) {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
