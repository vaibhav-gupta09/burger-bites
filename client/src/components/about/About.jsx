import React from 'react'
import '../../styles/about.scss'
import {Link} from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
import founding from '../../assets/founding.jpg'
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger Bytes</h4>
          <p>
            Burger Bytes is a pure vegetarian burger brand that offers a
            delicious range of burgers made with fresh, locally sourced
            vegetables and plant-based proteins. Their menu features a variety
            of creative and flavorful options to satisfy all taste buds, while
            providing a healthier and sustainable food option.
          </p>

          <Link to="/">
            {" "}
            <RiFindReplaceLine /> Explore Menu
          </Link>
        </article>

        <div>
          <h2>Message from founding team</h2>
          <article>
            <div>
              <img src={founding} />
            </div>
            <p>
              As the founders of Burger Bytes, We are proud to offer a pure
              vegetarian burger brand that prioritizes taste, nutrition, and
              sustainability. 
            </p>
          </article>
        </div>
      </main>
    </section>
  );
}

export default About