
import styles from '../contact/contact.module.css'

export default function Contactpage() {

    return(

        <div className={styles.contactContainer}>

            <section className={styles.hero}>

                <div className={styles.heroContent}>

                <h1> Get in Touch </h1>

                <p>  Feel free to reach out for collaboration, freelance projects,
                     UI/UX discussions, or professional opportunities.
                </p>


                </div>

            </section>

            <section className={styles.contactSection}>

                <h2> Contact Information </h2>

                <div className={styles.contactGrid}>

                <div className={styles.contactCard}>

                <h3> Mobile </h3>

                <p> +91-9629301115 </p>
                    
                </div>   

                <div className={styles.contactCard}>

                <h3> Email </h3>    

                <p>  vignesh.baskaran@outlook.com </p>

                </div>

                <div className={styles.contactCard}>

                <h3> LinkedIn </h3>

                <a href="https://www.linkedin.com/in/vignesh-baskaran-4b392a136/"
                target='_blank'>

                linkedin.com/in/vigneshBaskaran  

                </a>

                </div>

                <div className={styles.contactCard}>

                 <h3> Github </h3>  

                 <a href="https://github.com/vigneshpreservemetals-afk"
                 target='_blank'>

                 github.com/vigneshBaskaran  

                 </a> 

                </div>

                <div className={styles.contactCard}>

                 <h3> Behance </h3>   

                 <a href="https://www.behance.net/vigneshbaskaran3"
                 target='_blank'>
                 behance.net/vigneshBaskaran

                 </a>

                </div>


                </div>

            </section>

        </div>
    )
}