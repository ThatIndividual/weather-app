import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";


function average(data) {
  return Math.round(
    data.reduce((x, y) => x + y) / data.length
  );
}

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={120} width={160} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
        <p>{`${average(data)} ${units}`}</p>
      </Sparklines>
    </div>
  );
};