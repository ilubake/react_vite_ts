import { Outlet, } from 'react-router-dom';
import  './layout.scss'
Outlet
function layout() {
  return (
    <section id="container">
      <aside>aside
      </aside>
      <section>
        <header>header</header>
        <main><Outlet></Outlet></main>
      </section>
    </section>
  );
}

export default layout;
