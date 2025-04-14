import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import { SingleComicPage } from '../pages';

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner />;
    case 'loading':
      return newItemLoading ? <Component /> : <Spinner />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
};

const ComicsList = () => {
  const { getComics, process, setProcess } = useMarvelService();
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onComicsListLoaded = (newComics) => {
    let ended = false;
    if (newComics.length < 8) {
      ended = true;
    }

    setComics((comics) => [...comics, ...newComics]);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setComicsEnded((charEnded) => ended);
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle = { objectFit: 'cover' };
      if (
        item.thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ) {
        imgStyle = { objectFit: 'unset' };
      }
      return (
        <li className="comics__item" tabIndex={0} key={item.id}>
          <Link to={`/comics/${item.id}`} element={<SingleComicPage />}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className={`comics__item-img ${imgStyle}`} /*style={imgStyle}*/
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.price}</div>
          </Link>
        </li>
      );
    });
    return <ul className="comics__grid">{items}</ul>;
  }

  return (
    <div className="comics__list">
      {setContent(process, () => renderItems(comics), newItemLoading)}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: comicsEnded ? 'none' : 'block' }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
