import React from "react";

export default class SearchListing extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      menuArr: [
        {
          name: 'Haldiram Bhujiywala',
          price: 2500,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        },
        {
          name: 'Dunkin Donutes',
          price: 800,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-2.jpg')
        }, {
          name: 'Behrouz Biryani',
          price: 500,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-5.jpg')
        }, {
          name: 'Pizza Hut',
          price: 100,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-3.jpg')
        }, {
          name: 'Salad Company',
          price: 2400,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-4.jpg')
        }, {
          name: 'chai Point',
          price: 2400,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        }, {
          name: 'Sagar Ratna',
          price: 200,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        }, {
          name: 'Sagar Ratna',
          price: 400,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-2.jpg')
        }, {
          name: 'Sagar Ratna',
          price: 600,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        }, {
          name: 'Sagar Ratna',
          price: 250,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-2.jpg')
        }, {
          name: 'Lunch Box',
          price: 200,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        }, {
          name: 'Burger King',
          price: 500,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        }, {
          name: 'Sagar Ratna',
          price: 2400,
          address: 'sector 48 gurgaon',
          image: require('../../assets/image-1.jpg')
        },
      ],
    }
    
  }
  
  
  render() {
    return (
      
      <React.Fragment>
        {this.state.menuArr.map(function (item) {
          return (
            <React.Fragment>
              <div className="col-md-4">
                <div className="card menu-card">
                  <div className="image-block">
                    <img src={item.image}
                         className="menu-image"
                         alt="Image 1"/>
                    <div className="content-block">
                      <h3 className="menu-item-name">
                        {item.name}
                      </h3>
                      <p className="location-text">
                        <img src={require('../../assets/location.png')}
                             className="location-icon"
                             alt="Image 1"/>
                        {item.address}
                      </p>
                      <p className="price-text">Rs. {item.price}/-</p>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    
    );
  }
  
}
