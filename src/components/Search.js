import React, { Component } from 'react';

class Search extends Component {
  handleChange = (e) => {
    e.preventDefault();
    this.props.onHandleChange(e.target.value);
  }

  render() {
    return (
      <div className="row">
        <div className="form-group col-md-8">
          <input 
            type="text"
            value={this.props.data}
            onChange={this.handleChange}
            className="form-control form-control-lg"
            required
            placeholder="Insert image name. For example: Coffe"
          />
        </div>
        <div className="form-group col-md-4">
          <input 
            type="button"
            onClick={this.props.call}
            className="btn btn-lg btn-primary btn-block"
            value="Search"
          />
        </div>
      </div>
    );
  }
}

export default Search;