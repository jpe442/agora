import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    queryString: "",
  }
 
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    }
  }

 handleSubmit(e) {
    e.preventDefault();
    this.props.searchQuestions(this.state.queryString);
    this.props.ownProps.history.push('/homepage')
    
  }

  render () {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
              className="search-bar-input"
              placeholder="Search Agora..."
              value={this.state.queryString}
              onChange={this.handleInput('queryString')} />
          <div onClick={this.handleSubmit}className="search-submit-btn"></div>
        </form>
      </div>
    )
  }
}

export default SearchBar;