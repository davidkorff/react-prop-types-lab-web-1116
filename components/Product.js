import React from 'react'

class Product extends React.Component{
  render() {
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}



Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, product){
    if (props[product] === undefined) {
      return new Error('weight is required')
    } else if (isNaN(props[product])) {
      return new Error('weight needs to be a number')
    } else if (props[product] < 80 || props[product] > 300) {
      return new Error('weight needs to be between 80 and 300')
    }
  }
  }

  Product.defaultProps = {
    hasWatermark: false,
  }

  module.exports = Product



  //
  // Product.propTypes = {
  //   name: React.PropTypes.string.isRequired,
  //   producer: React.PropTypes.string,
  //   hasWatermark: React.PropTypes.bool,
  //   color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  //   weight: function(props, product) {
  //     if (props[product] === undefined) {
  //       return new Error('weight is required')
  //     } else if (isNaN(props[product])) {
  //       return new Error('weight needs to be a number')
  //     } else if (props[product] < 80 || props[product] > 300) {
  //       return new Error('weight needs to be between 80 and 300')
  //     }
  //   }
  // }
