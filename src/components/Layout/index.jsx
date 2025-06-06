import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

function Layout() {
  return (
    <>
        <div className={styles.layoutWrapper}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        <div>
          <Footer />
        </div>
    </>
  );
}

export default Layout;
