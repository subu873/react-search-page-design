import React from 'react';
import DatetimeRangePicker from 'react-datetime-range-picker';

export default class SearchFiler extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      members: 2,
      gender: "Male", // used for gender
      breakfast: false,
      dinner: false,
      bothMeal: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeGenderValue = this.onChangeGenderValue.bind(this);
    this.handleChangeMember = this.handleChangeMember.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = (target.name) ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  
  onChangeGenderValue(event) {
    this.setState({gender: event.target.value});
  }
  
  handleChangeMember(event) {
    this.setState({members: event.target.value});
  }
  
  submitRequirement = () => {
    if (this.state.breakfast === false && this.state.dinner === false && this.state.bothMeal === false) {
      alert("Please Select Meal Type");
    }
    console.log("Members", this.state.members);
    console.log("Gender", this.state.gender);
    
  };
  
  render() {
    return (
      <React.Fragment>
        
        <div className="container searchPage">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <h2 className="heading-filter">Filters</h2>
                  <hr className="filter-hr"/>
                  
                  <h6 className="filter-heading">
                    How many meals?
                  </h6>
                  <label>
                    <input
                      name="breakfast"
                      type="checkbox"
                      checked={this.state.breakfast}
                      onChange={this.handleInputChange}/>
                    BreakFast & Lunch
                  </label>
                  <label>
                    <input
                      name="dinner"
                      type="checkbox"
                      checked={this.state.dinner}
                      onChange={this.handleInputChange}/>
                    Dinner
                  </label>
                  <label>
                    <input
                      name="bothMeal"
                      type="checkbox"
                      checked={this.state.bothMeal}
                      onChange={this.handleInputChange}/>
                    Both
                  </label>
                  
                  <hr className="filter-hr"/>
                  
                  <h6 className="filter-heading">
                    How many members?
                  </h6>
                  
                  <select className="form-control" value={this.state.members}
                          onChange={this.handleChangeMember}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  
                  <hr className="filter-hr"/>
                  <h6 className="filter-heading">
                    Preferred gender of cook
                  </h6>
                  
                  <label>
                    <input type="radio" value="Male" name="gender" onChange={this.onChangeGenderValue}/> Male
                  </label>
                  <label>
                    <input type="radio" value="Female" name="gender" onChange={this.onChangeGenderValue}/> Female
                  </label>
                  <label>
                    <input type="radio" value="Other" name="gender" onChange={this.onChangeGenderValue}/> Other
                  </label>
                  
                  <hr className="filter-hr"/>
                  <h6 className="filter-heading">
                    Preferred Time Slot
                  </h6>
                  
                  <div className="row btn btn-group">
                    <button className="btn btn-primary btn-group-sm mealButton">
                      {this.state.breakfast ? "BreakFast" : null}
                    </button>
                    <button className="btn btn-primary btn-group-sm mealButton">
                      {this.state.dinner ? "Dinner" : null}
                    </button>
                    <button className="btn btn-primary btn-group-sm mealButton">
                      {this.state.bothMeal ? "Both Meal" : null}
                    </button>
                  </div>
                  
                  
                  <DatetimeRangePicker dateFormat={false}
                    onChange={this.handler}/>
                  
                  <div className="btn-block mt-5">
                    <button className="btn btn-success btn-block"
                            onClick={this.submitRequirement}>
                      Submit
                    </button>
                  </div>
                
                </div>
              </div>
              <div className="col-md-9">
                <h1 className="search-heading">
                  Vegetarian Restaurant Near Sector 48 Gurgaon,Haryana
                </h1>
                <p className="search-count">
                  Total 48 Restaurant Found
                </p>
                
                <div className="row">
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card menu-card">
                      <div className="image-block">
                        <img src={require('../../assets/image-1.jpg')}
                             className="menu-image"
                             alt="Image 1"/>
                        <div className="content-block">
                          <h3 className="menu-item-name">
                            Sagar Ratna
                          </h3>
                          <p className="location-text">
                            <img src={require('../../assets/location.png')}
                                 className="location-icon"
                                 alt="Image 1"/>
                            Sector 48 Gurgaon
                          </p>
                          <p className="price-text">Rs. 450/-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      
      </React.Fragment>
    );
  }
  
}