import LogoImg from '@/assets/logo.svg'
import styles from './index.module.less'

import pkg from '@univerjs/icons/package.json'

export function IconsPage () {
  return (
    <>
      <header className={styles.hero}>
        <section className={styles.wrapper}>
          <nav>
            <h1>
              <img src={LogoImg.src} alt="logo" />
              Univer Icon
            </h1>

            <label>
              {pkg.version}
            </label>
          </nav>

          <section>
            xxxxxx
          </section>
        </section>
      </header>

      <search>
        search
      </search>

      <main>
        main area
      </main>
    </>
  )
}
