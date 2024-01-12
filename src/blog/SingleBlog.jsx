/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import blogList from "../utilis/blogdata";
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../Shop/Tags';
import PopularPost from '../Shop/PopularPost';

const socialList = [{ link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", },];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id);

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog/Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              <article className='section-wrapper'>
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {
                          result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt="" className='w-100' />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className='lab-ul'>
                                    {
                                      item.metaList.map((val, i) => (
                                        <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                      ))
                                    }
                                  </ul>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, cum ipsum cumque aut possimus minus porro maiores modi blanditiis, quae rerum. Omnis, delectus? Suscipit cupiditate fugiat quod odio laborum expedita consequuntur, architecto quis voluptatum obcaecati fuga accusantium ratione quia nemo iure officia assumenda eius asperiores adipisci voluptate excepturi qui voluptatem.</p>
                                <blockquote>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae labore cupiditate exercitationem totam vero quia deserunt velit tempora officia.
                                  </p>
                                  <cite>
                                    <a href="">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eaque excepturi esse molestiae nisi non accusantium ad temporibus facilis! Aliquid eaque delectus maiores dolores voluptas eveniet suscipit vero odio! Fuga minus asperiores molestias inventore modi, ullam corrupti, cumque tempora blanditiis quaerat numquam debitis nobis hic natus dolore recusandae iusto consequatur?
                                </p>
                                <img src="\src\assets\images\blog\single\01.jpg" alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro velit odit laboriosam consectetur ipsa unde voluptatibus sint libero placeat nulla vel vitae veniam nam iusto delectus tempora officia eius, id, nostrum perspiciatis harum! Suscipit vitae repellat facere eaque esse. Itaque rerum dignissimos optio? Repudiandae cum sunt quos velit, eaque deserunt!</p>

                                <div className='video-thumb'>
                                  <img src="\src\assets\images\blog\single\02.jpg" alt="" />
                                  <a href="https://www.youtube.com/watch?v=H3XIJYEPdus" className='video-button popup' target='_blank'>
                                    <i className='icofont-ui-play'></i>
                                  </a>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus tenetur vel cupiditate dolorem labore neque, aliquam nobis quibusdam. Commodi omnis rerum enim non iure provident assumenda, sequi sapiente perferendis explicabo maiores est, atque vero amet blanditiis velit quisquam nihil ratione corporis necessitatibus? Voluptate modi ipsum debitis doloremque maiores aperiam aspernatur?</p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="">Agency</a>
                                    </li>
                                    <li>
                                      <a href="">Business</a>
                                    </li>
                                    <li>
                                      <a href="">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className='lab-ul social-icons'>
                                    {
                                      socialList.map((val, i) => (
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className='navigations-part'>
                      <div className="left">
                        <a href="#" className='prev'>
                          <i className='icofont-double-left'></i>Previous Blog
                        </a>
                        <a href="#" className='title'>
                          Evisculate Parallel Processes via Technica Sound Models Authoritative
                        </a>
                      </div>

                      <div className="right">
                        <a href="#" className='prev'>
                          <i className='icofont-double-right'></i>Next Blog
                        </a>
                        <a href="#" className='title'>
                          Evisculate Parallel Processes via Technica Sound Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className='col-lg-4 col-12'>
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
