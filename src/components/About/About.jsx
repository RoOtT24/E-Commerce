import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
   <div>
  <div className={styles.aboutSection}>
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  <h2 style={{textAlign: 'center'}}>Our Team</h2>
  <div className={styles.row}>
    <div className={styles.column}>
      <div className={styles.card}>
        <img src="/img/team1.jpg" alt="Jane" style={{width: '100%'}} />
        <div className={styles.container}>
          <h2>Jane Doe</h2>
          <p className={styles.title}>CEO &amp; Founder</p>
          <p className='text-black'>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p className='text-black'>jane@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.card}>
        <img src="/img/team2.jpg" alt="Mike" style={{width: '100%'}} />
        <div className={styles.container}>
          <h2>Mike Ross</h2>
          <p className={styles.title}>Art Director</p>
          <p className='text-black'>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p className='text-black'>mike@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.card}>
        <img src="/img/team3.jpg" alt="John" style={{width: '100%'}} />
        <div className={styles.container}>
          <h2>John Doe</h2>
          <p className={styles.title}>Designer</p>
          <p className='text-black'>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p className='text-black'>john@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
