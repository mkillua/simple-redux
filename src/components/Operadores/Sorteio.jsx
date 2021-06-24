
import React from "react";
import Card from "../Card";
import { connect } from "react-redux";

const Randomic = (props) => {
  return (
    <Card green title="Sorteio de um  Numeros">
      <div>
        <span>
          <strong>Resultado: </strong>
          <strong>{(+props.min * +props.max)*2}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max

  }
}

export default connect (mapStateToProps) (Randomic)
