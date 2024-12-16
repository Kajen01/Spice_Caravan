import React from 'react'
import './Review.css'
import { assets } from '../../assets/frontend_assets/assets.js'

const Reviews = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Review Submitted")
    }

    return (
        <div className='review' id='review'>
            <hr />
            <h1 className="review-heading">Reviews</h1>
            <div className="review-container">
                <div className="review-content">
                    <div className="profile">
                        <img src={assets.boy1} alt="boy1" />
                        <h3>Ravi</h3>
                    </div>
                    <p>The pizza was absolutely delicious! The crust was perfectly crispy, the cheese was gooey, and the toppings were fresh and flavorful. Hands down the best pizza I've had in a long time!</p>

                </div>
                <div className="review-content">
                    <div className="profile">
                        <img src={assets.girl1} alt="girl1" />
                        <h3>Ovini</h3>
                    </div>
                    <p>The burger was juicy and cooked to perfection. The combination of the melted cheese, crispy lettuce, and tangy sauce made every bite heavenly. I just wish the fries were a bit crispier.</p>
                </div>
                <div className="review-content">
                    <div className="profile">
                        <img src={assets.boy2} alt="boy2" />
                        <h3>Raja</h3>
                    </div>
                    <p>The pasta was heavenly! The sauce was rich and creamy, and the noodles were cooked al dente. It felt like I was dining in Italy. Absolutely worth every penny!</p>
                </div>
                <div className="review-content">
                    <div className="profile">
                        <img src={assets.girl2} alt="girl2" />
                        <h3>Maya</h3>
                    </div>
                    <p>The curry was packed with flavors and had the perfect amount of spice. The naan bread was soft and fresh, making it an ideal companion. Could use a bit more portion size, though.</p>
                </div>
                <div className="review-content">
                    <div className="profile">
                        <img src={assets.boy3} alt="boy3" />
                        <h3>Arjun</h3>
                    </div>
                    <p>This cake was a slice of heaven! Moist, rich, and not overly sweet, with layers of decadent frosting. Perfect for satisfying any sweet tooth..</p>
                </div>
                <div className="review-content">
                    <div className="profile">
                        <img src={assets.girl3} alt="girl3" />
                        <h3>Nayan</h3>
                    </div>
                    <p>The ramen broth was rich and savory, and the noodles had the perfect texture. Topped with a soft-boiled egg and tender pork, it was comfort food at its finest.</p>
                </div>
            </div>
            <div>
                <form action="submit" className="review-form" onSubmit={handleSubmit}>
                    <label htmlFor="review-area">Review Here...</label>
                    <div className="review-profile">
                        <img src={assets.girl3} alt="girl3" />
                        <h3>Nayan</h3>
                    </div>
                    <textarea name="review" id="review-area" className='review-area' placeholder='Type Your Review Here'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <hr />
        </div>
    )
}

export default Reviews