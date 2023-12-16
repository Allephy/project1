import { Link } from 'react-router-dom';

export default function TypeView() {
    return (
        <div className='Typeview'>
            <div className="grid grid-cols-1 gap-4 font-light text-2xl">
              <button>
                <Link to="/Charisma">
                  <img className="mx-auto my-3" alt="Charisma" src="/images/Charisma.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Charisma">Charisma</Link>
              </button>
              <button>
                <Link to="/Charmer">
                <img className="mx-auto my-3" alt="Charmer" src="/images/Charmer.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Charmer">Charmer</Link>
              </button>
              <button>
                <Link to="/Coquette">
                <img className="mx-auto my-3" alt="Coqutte" src="/images/Coqutte.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Coquette">Coquette</Link>
              </button>
              <button>
              <Link to="/Ideallover">
                <img className="mx-auto my-3" alt="IdealLover" src="/images/IdealLover.png" width="60%" height="60%"></img>
              </Link>
                <Link to="/Ideallover">IdealLover</Link>
              </button>
              <button>
                <Link to="/Lake">
                <img className="mx-auto my-3" alt="Lake" src="/images/Lake.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Lake">Lake</Link>
              </button>
              <button>
              <Link to="/Natural">
                <img className="mx-auto my-3" alt="Natural" src="/images/Natural.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Natural">Natural</Link>
              </button>
              <button>
              <Link to="/Siren">
                <img className="mx-auto my-3" alt="Siren" src="/images/Siren.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Siren">Siren</Link>
              </button>
              <button>
              <Link to="/Star">
                <img className="mx-auto my-3" alt="Star" src="/images/Star.png" width="60%" height="60%"></img>
                </Link>
                <Link to="/Star">Star</Link>
              </button>
              <div className='mb-10'></div>
            </div>
        </div>
        

    );
}