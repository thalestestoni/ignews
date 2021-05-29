import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>29 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Late in the afternoon of May 24, 2021, Tessa Kriesel was informed by her leadership at Fast that the team she was hired to lead, DevRel (Developer Relations), would own Documentation. The day was wrapping up, and Tessa would follow up with direction for the direction for said documentation on the next working day.</p>
          </a>
          <a href="">
            <time>29 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Late in the afternoon of May 24, 2021, Tessa Kriesel was informed by her leadership at Fast that the team she was hired to lead, DevRel (Developer Relations), would own Documentation. The day was wrapping up, and Tessa would follow up with direction for the direction for said documentation on the next working day.</p>
          </a>
          <a href="">
            <time>29 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Late in the afternoon of May 24, 2021, Tessa Kriesel was informed by her leadership at Fast that the team she was hired to lead, DevRel (Developer Relations), would own Documentation. The day was wrapping up, and Tessa would follow up with direction for the direction for said documentation on the next working day.</p>
          </a>
          <a href="">
            <time>29 de maio de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Late in the afternoon of May 24, 2021, Tessa Kriesel was informed by her leadership at Fast that the team she was hired to lead, DevRel (Developer Relations), would own Documentation. The day was wrapping up, and Tessa would follow up with direction for the direction for said documentation on the next working day.</p>
          </a>
        </div>
      </main>
    </>
  );
}