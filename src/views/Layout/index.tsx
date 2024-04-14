import { Outlet, } from 'react-router-dom';
import  './layout.scss'
import Aside from './aside';
function layout() {
  return (
    <section id="container">
      <aside>
        <Aside></Aside>
      </aside>
      <section>
        <header>header</header>
        <main><Outlet></Outlet></main>
      </section>
    </section>
  );
}

export default layout;
