import styles from '@/styles/projects.module.css'
import router from 'next/router';

export default function Projects() {

    const handleClick = (path : string) => {
        router.push(path)
    };

    return (
        <>
            <div className={styles.top}>
                <h1>Projects</h1>
                <p>Here are some of the projects I'm building or is it in development</p>
            </div>
            <div className={styles.projectscontainer}>
                <div className={styles.rectangles}>
                    <div className={styles.rectangle}>
                        <p>Python Synth</p>
                    </div>
                    <div className={styles.rectangle}>
                        <p>Netflix Clone</p>
                    </div>
                    <div className={styles.rectangle}>
                        <p>Todo App</p>
                        <img></img>
                        <p onClick={() => handleClick('/projects/todoapp')}>Check it out</p>
                    </div>
                </div>
            </div>
        </>
    )
} 