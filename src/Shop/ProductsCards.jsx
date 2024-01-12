/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const ProductsCards = ({ GridList, Products }) => {

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {
        Products.map((Products, i) => (
          <div key={i} className='col-lg-4 col-md-6 col-12'>
            <div className="product-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={Products.img} alt="" />
                </div>
                <div className="product-action-link">
                  <Link to={`/shop/${Products.id}`}><i className='icofont-eye'></i></Link>
                  <a href=""><i className='icofont-heart'></i></a>
                  <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                </div>
              </div>
              <div className='product-content'>
                <h5>
                  <Link to={`/shop/${Products.id}`}>{Products.name}</Link>
                </h5>
                <p className='prodcutRating'><Rating /></p>
                <h6>${Products.price}</h6>
              </div>
            </div>

            <div className="product-list-item">
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={Products.img} alt="" />
                </div>
                <div className="product-action-link">
                  <Link to={`/shop/${Products.id}`}><i className='icofont-eye'></i></Link>
                  <a href=""><i className='icofont-heart'></i></a>
                  <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                </div>
              </div>
              <div className='product-content'>
                <h5>
                  <Link to={`/shop/${Products.id}`}>{Products.name}</Link>
                </h5>
                <p className='prodcutRating'><Rating /></p>
                <h6>${Products.price}</h6>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductsCards
