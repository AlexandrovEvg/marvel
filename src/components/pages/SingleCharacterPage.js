import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';
import './singleComicPage.scss';

const SingleCharacterPage = () => {
  const [char, setChar] = useState(null);
  const { characterId } = useParams();
  const { getCharacter, loading, error, clearError } = useMarvelService();

  console.log();
  useEffect(() => {
    updateComic(characterId);
  }, [characterId]);

  const updateComic = () => {
    clearError();
    getCharacter(characterId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;
  return (
    <>
      <AppBanner />
      <div className="single-comic">
        {errorMessage}
        {spinner}
        {content}
      </div>
    </>
  );
};

const View = ({ char }) => {
  const { name, thumbnail, description } = char;
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta name="description" content={`${name} comics book`} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
      </div>
      <button className="single-comic__back__btn" onClick={() => navigate(-1)}>
        Back to all
      </button>
    </>
  );
};

export default SingleCharacterPage;
