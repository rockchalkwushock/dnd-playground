import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TargetBox from './TargetBox';

const styling = {
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center"
}

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
        <div style={styling}>
          <TargetBox />
        </div>
      </div>
    );
  }
}
