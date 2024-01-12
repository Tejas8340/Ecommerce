import React, { useState } from 'react'
import Rating from '../components/Rating';

const reviewTitle = "Add a Review"
let ReviewList = [{ imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
      </ul>


      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        <div className='review-showing'>
          <ul className='content lab-ul'>
            {
              ReviewList.map((review, i) => (
                <li key={i}>
                  <div className='post-thumb'>
                    <img src={review.imgUrl} alt="" />
                  </div>
                  <div className="post-content">
                    <div className='entry-meta'>
                      <div className="posted-on">
                        <a href="">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className='entry-content'>
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>

          <div className='client-review'>
            <div className='review-form'>
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>
              <form action="action" className='row'>
                <div className='col-md-4 col-12'>
                  <input type="text" name='name' id='name' placeholder='Full Name *' />
                </div>
                <div className='col-md-4 col-12'>
                  <input type="email" name='email' id='name' placeholder='Your Email *' />
                </div>
                <div className='col-md-4 col-12'>
                  <div className='rating'>
                    <span className='me-2'>Your Rating</span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea name="message" id="message" rows="8" placeholder='Type Here Message...'></textarea>
                </div>
                <div className='col-12'>
                  <button type='submit' className='default-button'>
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='description'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sed harum aliquam consectetur dignissimos, numquam vel deleniti velit, temporibus reprehenderit quaerat atque voluptate fuga minima eveniet. Veniam illum maiores numquam doloribus vero. Dicta quasi commodi atque sequi, dolorum eius earum, officiis quidem vero mollitia autem suscipit voluptatibus tempora fugiat blanditiis recusandae! Quaerat, sunt voluptates nisi repellendus debitis illo placeat vero eos quibusdam asperiores labore, quia neque autem adipisci quod harum quisquam in laborum. Minima magnam nemo explicabo. Quos libero dolore amet, minima autem eum impedit vitae quaerat omnis iusto nam provident velit dolores itaque sunt? Totam eius itaque reiciendis illum.</p>

          <div className='post-item'>
            <div className="post-thumb">
              <img src="\src\assets\images\shop\01.jpg" alt="" />
            </div>
            <div className='post-content'>
              <ul className='lab-ul'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</li>
              </ul>
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aspernatur saepe illum ea nam nisi magnam pariatur veritatis corporis voluptate esse quo atque minus, architecto ut, in soluta dolorem velit ratione molestiae nostrum. Quisquam dicta pariatur consectetur, modi aut ratione, impedit necessitatibus mollitia at eaque beatae omnis voluptatem delectus, ea reprehenderit animi amet molestias ipsam voluptatum itaque unde. Tempore, illum excepturi. Voluptates minima corporis autem odio commodi deleniti quasi, ad itaque reiciendis libero dolorem quam tempore id quia aspernatur. Placeat explicabo quo magni. Ratione nobis eveniet laudantium corrupti id, dolorum fugit saepe accusamus quia reprehenderit. Fugit odit assumenda dicta ad!</p>
        </div>
      </div>
    </>
  )
}

export default Review
