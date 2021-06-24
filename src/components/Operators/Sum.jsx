
import React from "react";
import Card from "../Card";
import { connect } from "react-redux";


const Sum = (props) => {
  return (
    <Card blue title="Soma de Numeros">
      <div>
        <span>
          <strong>Resultado: </strong>
          <strong>{(+props.min + +props.max)}</strong>
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

export default connect (mapStateToProps) (Sum)
