import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import FindCharacter from '../findCharacter/FindCharacter';
import setContent from '../../utils/setContent';
import './charInfo.scss';
import { SingleComicPage } from '../pages';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const [allComics, setAllComics] = useState([]);

  const { getCharacter, clearError, getAllComics, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    updateComic();
  }, [props.charId]);

  useEffect(() => {
    getAllComics()
      .then((res) => setAllComics(res))
      .then(() => setProcess('waiting'));
  }, []);

  const updateComic = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId)
      .then(onComicLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onComicLoaded = (char) => {
    setChar(char);
  };

  return (
    <div className="char__block">
      <div className="char__info">
        {setContent(process, View, char, allComics)}
      </div>
      <FindCharacter />
    </div>
  );
};

const View = ({ data, all }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;
  let imgStyle = { objectFit: 'cover' };
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' };
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : 'There is no comics with this character'}
        {comics.map((item, i) => {
          // eslint-disable-next-line
          if (i > 9) return;
          let index = all.findIndex((el) => el.title === item) + 1;
          return (
            <li key={i} className="char__comics-item">
              <Link
                value={item}
                to={index ? `/comics/${index}` : `/notfound`}
                element={<SingleComicPage />}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
