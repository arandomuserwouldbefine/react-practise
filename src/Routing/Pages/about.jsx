import styles from "./about.module.css"

export default function About() {
    return (
        <>
            <div className={styles.aboutDiv}>
                <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" className={styles.personImage} />
                <p className={styles.aboutusPara}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at totam quis, maxime nesciunt nulla odio eum dignissimos? Porro, tempore?
                </p>
            </div>

        </>
    )
}