import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Hey, welcome to about</h1>
      <div>
        <p>
          Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport
          etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu
          commun vocabules.{' '}
        </p>
        <p>
          A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li
          Europan lingues es membres del sam familie.
        </p>
        <p>
          On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica,
          pronunciation e plu sommun paroles.
        </p>
      </div>
      <article>
        <Link to={'/'}>
          <button>Homepage </button>
        </Link>
      </article>
    </div>
  );
}

export default About;
