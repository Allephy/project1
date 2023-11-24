import { Link } from 'react-router-dom';

export default function TypeView() {
    return (
        <div className='Typeview'>
            <div className="grid grid-cols-3 gap-4 font-light">
              <button>
                <Link to="/Charisma">Charisma</Link>
              </button>
              <button>
                <Link to="/Charmer">Charmer</Link>
              </button>
              <button>
                <Link to="/Coquet">Coquet</Link>
              </button>
              <button>
                <Link to="/Dandy">Dandy</Link>
              </button>
              <button>
                <Link to="/Ideallover">IdealLover</Link>
              </button>
              <button>
                <Link to="/Lake">Lake</Link>
              </button>
              <button>
                <Link to="/Natural">Natural</Link>
              </button>
              <button>
                <Link to="/Siren">Siren</Link>
              </button>
              <button>
                <Link to="/Star">Star</Link>
              </button>
            </div>
        </div>
        

    );
}