import { PrimaryButton } from "@fluentui/react";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <>
        <PrimaryButton className="m-2" onClick={onReset}>
          Reset
        </PrimaryButton>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </>
    );
  }
}

export default Counters;
