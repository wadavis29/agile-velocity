import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <Link to="/recognition"><i className="fas fa-trophy"></i> Longhorn 100 #17</Link>
          <Link to="/recognition"><i className="fas fa-award"></i> Inc. 5000 Honoree</Link>
        </div>
        <div className="top-bar-right">
          <Link to="/insights">Insights</Link>
          <Link to="/about">About</Link>
          <a href="https://navigator.pathtoagility.com/" target="_blank" rel="noopener noreferrer">
            Navigator Login <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
