
import styles from './aboutPage.module.css'

export default function AboutPage() {

    return(

        <div className={styles.aboutContainer}>

        <section className={styles.heroSection} >

        <div className={styles.heroContent}> 
        
        <h1> Vignesh Baskaran </h1>

        <h3> UX Designer </h3>

        <p>
            Passionate about creating intuitive, user-centered digital
            experiences that solve real-world problems and enhance user
            satisfaction. 
        </p>

        </div>

        </section>

        <section className={styles.aboutSection}>

        <div className={styles.aboutContent}>

        <h3> About Me </h3> 

        <p> 
          I am a UI/UX Designer specializing in user research, wireframing,
          prototyping, interaction design, and design systems for web and
          mobile applications.
        </p>

        </div>   

        </section>

        <section className={styles.skillSection}>

        <h3> Skills </h3>

        <div className={styles.skillsGrid}>

        <p className={styles.skillCard}> Figma </p>

        <p className={styles.skillCard}> Photoshop </p>

        <p className={styles.skillCard}> Miro </p>

        <p className={styles.skillCard}> Invision </p>

        <p className={styles.skillCard}> HTML </p>

        <p className={styles.skillCard}> CSS </p>

        <p className={styles.skillCard}> Bootstrap </p>

        <p className={styles.skillCard}> Javascript </p>

        <p className={styles.skillCard}> React </p>
        

        </div>


        </section>

        </div>
    )
}