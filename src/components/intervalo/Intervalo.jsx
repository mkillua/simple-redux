import "./intervalo.css";

import React from "react";
import Card from "../Card";
import { connect } from "react-redux";
import { ChangeMinNumber, ChangeMaxNumber } from "../../store/actions/number";

const Intervalo = (props) => {
  return (
    <Card title="Intervalo de Numeros">
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            name="number"
            id="min_number"
            value={props.min}
            onChange={e => props.changeMinValue(e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            name="max_number"
            id="max_number"
            value={props.max}
            onChange={e => props.changeMaxValue(e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    changeMinValue(min_value) {
      const action = ChangeMinNumber(min_value);
      dispatch(action);
    },

    changeMaxValue(max_value) {
      const action = ChangeMaxNumber(max_value);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
