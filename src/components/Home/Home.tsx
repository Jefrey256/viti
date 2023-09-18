import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './estyle.css';


const Home = () => {
  useEffect(() => {
    // Função para manipulação do evento do hamburguer
    const handleHamburguerClick = () => {
      const menu = document.getElementById('menu');
      if (menu) {
        menu.classList.toggle('active');
      }
    };

    // Adiciona o ouvinte de evento ao elemento com ID 'hamburger'
    const hamburguer = document.getElementById('hamburger');
    if (hamburguer) {
      hamburguer.addEventListener('click', handleHamburguerClick);
    }

    // Adiciona os ouvintes de evento aos itens de submenu
    const submenuItems = document.querySelectorAll('#menu .has-submenu');
    submenuItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    // Função para remover os ouvintes de evento quando o componente é desmontado
    return () => {
      if (hamburguer) {
        hamburguer.removeEventListener('click', handleHamburguerClick);
      }
      submenuItems.forEach(item => {
        item.removeEventListener('click', () => {
          item.classList.toggle('active');
        });
      });
    };
  }, []);
  

  return (
    <>
      <header>
        <h1 className="h1alt">Seja Bem vindo seu puto</h1>
        <button><Link to={"/gay"}>Gay</Link></button>
      </header>
      <div id="hamburger">&#9776;</div>
      
      <div id="menu">
        <ul className="reto">
          <li><a href="#">Página Inicial</a></li>
          <li><a href="./src/html/lancamentos.html">Lançamentos</a></li>
          <li><a href="./src/html/teste.html">Serviços</a></li>
          <li className="has-submenu">
            <a className="anc" href="#">SFW</a>
            <ul className="lulu">
              <li><Link to={"/gay_"}>Gay</Link></li>
              <li><Link to={'/hetero_'}>Hétero</Link></li>
              <li><Link to={'/lesbi_'}>Lesbi</Link></li>
            </ul>
          </li>
          <li className="has-submenu">
            <a href='#' >NSFW</a>
            <ul className="lulu">
              <li><Link to={'/gay'}>Gay</Link></li>
              <li>
                <Link to={"/hetero"}>Hetero</Link></li>
              <li><Link to={"/futa"}>Futa</Link></li>
              <li><Link to={"/lesbi"}> Lesbi</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <h1>fodase</h1>
      
      <section className="pig">
        <div className="cont">
          <div className="ft">
            <h2 >NEKO ARC</h2>
            <img src="4https://github.com/Jefrey256/imgs/blob/main/projetinho/CvdhxAgUAAErU7q.jpg?raw=true" alt=""/>
            <h2 >Editor: JEREDY</h2>
          </div>
          <div className="ft">
            <h2 >NEKO ARC</h2>
            <img src="4https://github.com/Jefrey256/imgs/blob/main/projetinho/IMG-20230731-WA2589.jpg?raw=true" alt=""/>
            <h2 >Editor: JEREDY</h2>
          </div>
          <div className="ft">
            <h2 >NEKO ARC</h2>
            <img src="4https://github.com/Jefrey256/imgs/blob/main/projetinho/IMG-20230731-WA2600.jpg?raw=true" alt=""/>
            <h2 >Editor: JEREDY</h2>
          </div>
        </div>
      </section>
      <footer>Criador JEREDY</footer>
    
    </>
  );
};

export default Home;

 