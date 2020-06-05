import React from 'react';
import DatetimeRangePicker from 'react-datetime-range-picker';
import moment from "moment";

export default class SearchFiler extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      members: 2,
      gender: "", // used for gender
      breakfast: false,
      dinner: false,
      bothMeal: false,
      selectedFiltersShow: true,
      startTime: '',
      endTime: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeGenderValue = this.onChangeGenderValue.bind(this);
    this.handleChangeMember = this.handleChangeMember.bind(this);
    this.handlerTime = this.handlerTime.bind(this);
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
  
  handlerTime(event) {
    let startTime = moment(event.start).format("hh:mm a");
    let endTime = moment(event.end).format("hh:mm a");
    this.setState({startTime: startTime});
    this.setState({endTime: endTime});
  }
  
  submitRequirement = () => {
    if (this.state.breakfast === false && this.state.dinner === false && this.state.bothMeal === false) {
      alert("Please Select Meal Type");
      return false;
    }
    
    if (this.state.gender === '') {
      alert("No Gender Selected");
      return false;
    }
    
    console.log("Members", this.state.members);
    console.log("Gender", this.state.gender);
    this.setState({selectedFiltersShow: true})
  };
  
  render() {
    return (
      <React.Fragment>
        
        <div className="container searchPage">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 filterBlockStart">
                <div className="card">
                  <h2 className="heading-filter">Filters</h2>
                  
                  {(this.state.selectedFiltersShow) ?
                    <div className="selected-filters-block">
                      
                      <div className="filter-selected">
                        <div className="filter-close">✕</div>
                        <div className="filter-text">Start Time : {this.state.startTime}</div>
                      </div>
                      <div className="filter-selected">
                        <div className="filter-close">✕</div>
                        <div className="filter-text">End Time : {this.state.endTime}</div>
                      </div>
                      
                      {this.state.gender != '' ?
                        <div className="filter-selected">
                          <div className="filter-close">✕</div>
                          <div className="filter-text">{this.state.gender}</div>
                        </div>
                        : null}
                      {this.state.members != '' ?
                        <div className="filter-selected">
                          <div className="filter-close">✕</div>
                          <div className="filter-text">Members : {this.state.members}</div>
                        </div>
                        : null}
                      
                      {this.state.breakfast ?
                        <div className="filter-selected">
                          <div className="filter-close">✕</div>
                          <div className="filter-text">Breakfast</div>
                        </div>
                        : null}
                      {this.state.dinner ?
                        <div className="filter-selected">
                          <div className="filter-close">✕</div>
                          <div className="filter-text">Dinner</div>
                        </div>
                        : null}
                      {this.state.bothMeal ?
                        <div className="filter-selected">
                          <div className="filter-close">✕</div>
                          <div className="filter-text">Both Meal</div>
                        </div>
                        : null}
                    </div>
                    : null}
                  
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
                  
                  {this.state.breakfast === false && this.state.dinner === false && this.state.bothMeal === false ? null :
                    <div>
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
                      
                      <DatetimeRangePicker
                        dateFormat={false}
                        onChange={this.handlerTime}/>
                    </div>
                  }
                  
                  <div className="btn-block mt-5">
                    <button className="btn btn-success btn-block submit-btn"
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