import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', paddingTop: '200px' }}>
      <h2 className="single-comic__name" style={{ fontSize: '48px' }}>
        404 Not Found
      </h2>
      <hr style={{ margin: '20px 0' }} />
      <Link
        to={'..'}
        className="single-comic__back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back to all
      </Link>
    </div>
  );
};

export default NotFound;
