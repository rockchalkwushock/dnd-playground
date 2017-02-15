import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
// import ItemTypes from './ItemTypes';

const style = {
  border: '1px solid gray',
  height: '30rem',
  width: '70rem',
  padding: '2rem',
  textAlign: 'center',
};

const fileTarget = {
  drop() {
    console.log('got it!');
    // Here is where the POST to the Cloudinary API must occur.
    // Will want to run a try/catch for error catching.
    // 
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  getItem: monitor.getItem()
})

@DropTarget(NativeTypes.FILE, fileTarget, collect)
export default class TargetBox extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    getItem: PropTypes.object
  };

  render() {
    const { canDrop, isOver, connectDropTarget, getItem } = this.props;
    const isActive = canDrop && isOver;
    console.log(getItem);
    /*
    When dropped the console.log() returns and object
    {
      files: [
        {
          lastModified: UTC Time Stamp
          name: pic.jpg
          size: bytes
          type: image/(jpg, png, jpeg)
        },
        {
          lastModified: UTC Time Stamp
          name: pic.jpg
          size: bytes
          type: image/(jpg, png, jpeg)
        }
      ]
    }
    */
    return connectDropTarget(
      <div className='here' style={style}>
        {isActive ?
          'Release to drop' :
          'Drag item here'
        }
        <div className="upload-button">
          <label htmlFor="fileupload"> Select a file to upload</label>
          <input type="file"/>
        </div>
      </div>,
    );
  }
}
