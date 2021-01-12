import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class PhotosList extends Component {
  showImages = () => {
    const images = this.props.images; 
    if (images.length === 0) return null;

    return (
      <>
        <div className='col-12 p-5 row'>
          {images.map(image => (
            <Image 
              key={image.id}
              image={image}
            />
          ))}
        </div>
        <Pagination 
          prevImages={this.props.prevImages}
          nextImages={this.props.nextImages}
        />
      </>
    );
  }
  
  render() {
    return (
      <>
        {this.showImages()}
      </>
    );
  }
}

export default PhotosList;