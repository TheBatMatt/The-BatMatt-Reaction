import React from 'react';

function Contact () {
  return (
    <section id="contact-info">
      <div className="about-para">
        <p>
         This was my very first solo React Appliation and I'm proud of it. I've decided to continue building on it. 
         As you can see, I'm something of a nerd but I love to express my individuality through my interests and 
         passions. I'm always wiling to learn and do better! Right now, I'm primarily front-end, but am attemtping 
         to branch out to back end as well. If you want to contact me, please click the links below. Thank you for 
         your time!
        </p>

        <ul>
          <li><a href="mailto:tedmjablonowski@gmail.com">Email</a></li>
          <li><a href="https://github.com/TheBatMatt">Coder Cave</a></li>
          <li><a href="https://www.linkedin.com/in/ted-jablonowski-234b48240/">LinkedIn</a></li>
          <li><a href="tel:+2168551376">216-855-1376</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
