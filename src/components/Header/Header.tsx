import { useContext } from "react";
import {
  lightTheme,
  darkTheme,
  ThemeContext,
} from "../../context/theme.context";
import { UserContext } from "../../context/user.context";

import styles from "./header.module.css";

export default function Header({ scrollY }: { scrollY: number }) {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;

  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;

  return (
    <header className={styles.header}>
      <button
        onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
      >
        Switch Theme
      </button>

      {user !== null ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={() => setUser(null)}>Log out</button>
        </>
      ) : (
        <button onClick={() => setUser({ name: "Vasya Pupkin" })}>
          Log in
        </button>
      )}

      <p className={styles["view-scroll-y"]}>Scroll Y: {scrollY}</p>
      <h3 className={styles.xl}>Header</h3>
      <p className={styles.s}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit totam
        voluptatem in provident aliquam laboriosam dolores neque autem,
        blanditiis repudiandae voluptate asperiores earum, voluptatibus corporis
        quasi quidem at! Enim, qui. Eos dolores accusantium eligendi rem,
        doloribus recusandae aperiam at temporibus laborum culpa. Facilis, a.
        Dolorem, sunt? Quae mollitia adipisci suscipit minus? Nobis dolores
        tenetur officia doloribus ea, illum beatae molestiae! Facere nemo quos
        sit in maiores obcaecati molestiae, aliquid, corrupti voluptate saepe
        impedit voluptatem blanditiis optio sint quia. Sapiente molestias minus
        fugit necessitatibus, vitae assumenda possimus suscipit in non aperiam.
        Eaque adipisci ad quas eos reiciendis, voluptatum repellat vitae
        voluptatem est atque distinctio repellendus! Asperiores minima ea eius,
        pariatur porro fuga voluptates vero unde numquam dolore, ullam aliquid
        ipsa officiis. Commodi accusantium dolorem nobis tempore quo adipisci
        magni incidunt totam quam quisquam. Sequi magni corporis ullam nesciunt
        libero laborum ad tempora praesentium labore consectetur, culpa numquam
        saepe quisquam id blanditiis. Dignissimos corporis quo, nihil minima
        magnam similique, neque quasi nostrum suscipit aliquid assumenda dolores
        eos nulla harum consequatur eaque porro minus ipsum nemo? Vitae placeat
        nam eius perferendis asperiores dolorum. Perspiciatis vel vitae ea
        ipsum, ullam iste quis magnam, inventore soluta iusto quas vero
        aspernatur? Deserunt quod dicta aspernatur nesciunt. Necessitatibus,
        dolor aliquid a veritatis deserunt amet? Fuga, cum explicabo? Illo
        voluptate sed adipisci, recusandae unde esse doloribus dicta, quam
        placeat ratione voluptatem quisquam in, sequi vero velit quibusdam
        itaque minima dolore non tenetur. Eaque quisquam earum repellendus quas.
        Iusto! Maiores totam, explicabo cumque officiis, inventore eveniet
        debitis quo sequi voluptatum incidunt repudiandae porro corporis id aut
        sint sit obcaecati exercitationem laboriosam impedit. Provident earum
        nisi, illum tempore eligendi velit. Voluptatem, rem officiis nihil nam
        laudantium quod maiores nulla cupiditate voluptate aliquid laboriosam
        cum. Eligendi odit, cum distinctio animi officia neque totam vel
        possimus quae quam cupiditate adipisci, aut numquam!
      </p>
    </header>
  );
}
