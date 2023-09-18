import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './Style.module.css'

const Gay = () => {
    return(
        <>
        <div>
        <Header />
        <div className={style.container}>
            <ul>
                <li><Link to='/'>home</Link></li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam incidunt, laudantium iste saepe quia nesciunt commodi dignissimos temporibus dolor ipsam molestiae corrupti ea, ullam itaque. Repellendus, enim. Nobis, est?
                Mollitia molestias officia aperiam autem? Nobis debitis totam tenetur adipisci cum quae incidunt ut ex blanditiis quibusdam dignissimos doloribus autem laborum eum in dolor delectus, explicabo impedit, perspiciatis asperiores temporibus?
                Aspernatur quibusdam dicta accusamus eos provident at esse? Voluptas dolorem sit fuga nihil asperiores quas accusamus minima hic deserunt ad, doloribus et magnam maxime velit cupiditate laboriosam veniam delectus error!
                Iure, dolore! Reiciendis magni ut, quisquam sed dicta error magnam dolor ullam saepe suscipit dolorum odio sequi natus assumenda deserunt dolorem placeat mollitia id eos. Harum magni iure quaerat itaque.
                Consectetur velit commodi nemo molestias. Provident eos reprehenderit repellat et ipsa fugit vitae vero doloremque beatae magni libero iste corrupti harum, dolor unde ipsum incidunt repellendus quod tenetur soluta corporis?
                Voluptatibus veritatis quasi eaque neque quas numquam minus? Nulla, obcaecati! Optio eos harum facilis eaque corporis quos excepturi incidunt cumque veniam voluptas! Eligendi nihil molestiae alias, reprehenderit eius sapiente excepturi!
                Iusto perferendis magnam nemo qui totam saepe pariatur ipsum dolorum ab, et itaque. Adipisci modi, recusandae necessitatibus eligendi cupiditate unde neque culpa corrupti maxime suscipit corporis commodi harum cumque mollitia?
                Accusantium, rerum maiores. Harum, est neque laudantium, dolores nobis voluptatem eaque dolore adipisci repellendus reprehenderit, velit expedita. Nesciunt maxime, laudantium porro quia ea asperiores corrupti provident facilis quibusdam! Nostrum, commodi?
                Harum hic nihil optio dolorum. Iste, nam mollitia? Similique, magni voluptatibus unde eum ad eius illo! Rem non nostrum possimus similique. Sunt, atque quis. Ea ullam accusantium cumque reprehenderit voluptatum.
            </p>
            
        </div>
        <Footer />
        </div>
        </>
    )
}
export default Gay;