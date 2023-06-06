import React, { Component } from "react";
import { DefaultButton, IconButton } from "@fluentui/react/lib/Button";
import { SharedColors } from '@fluentui/theme';

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <DefaultButton onClick={() => this.props.onIncrement(this.props.counter)}>Increment</DefaultButton>
        <IconButton onClick={() => this.props.onDelete(this.props.counter.id)} style={{color: SharedColors.red10}} iconProps={{ iconName: 'delete' }} title="Add" ariaLabel="Add" />
      </div>
    );
  }

  formatCount(){
    const { value } = this.props.counter;

    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += (this.props.counter.value === 0 ? "warning" : "primary");
    return classes;
  }
}

export default Counter;
