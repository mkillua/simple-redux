
import React from "react";
import { connect } from "react-redux";
import Card from "../Card";

const Media = props => {
  return (
    <Card red title="Média de Numeros">
      <div>
        <span>
          <strong>Resultado: </strong>
          <strong>{(+props.min + props.max)/2}</strong>
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

export default connect (mapStateToProps) (Media)
