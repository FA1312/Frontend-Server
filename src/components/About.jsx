import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Hey, welcome to about</h1>
      <div>
        <p>
          Meraki, a verb, or adverb, a Modern Greek word, derived from the Turkish “Merak” (Labor of love, to do
          something with pleasure), is applied to tasks, usually, creative or artistic tasks but can be applied to any
          task at all. Meraki means to do something with passion, with absolute devotion, with undivided attention.
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
