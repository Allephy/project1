import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

export default function TypeView() {
    return (
        <div className='Typeview'>
            <div className='type-btn'>
              <button>
                <Link to="/charisma">Charisma</Link>
              </button>
              <button>
                <Link to="/charmer">Charmer</Link>
              </button>
              <button>
                <Link to="/coquet">Coquet</Link>
              </button>
              <button>
                <Link to="/dandy">Dandy</Link>
              </button>
              <button>
                <Link to="/ideallover">IdealLover</Link>
              </button>
              <button>
                <Link to="/natural">Natural</Link>
              </button>
              <button>
                <Link to="/siren">Siren</Link>
              </button>
              <button>
                <Link to="/star">Star</Link>
              </button>
            </div>
        </div>
        

    );
}