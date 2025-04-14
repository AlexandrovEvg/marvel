import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';
import './singleComicPage.scss';
import setContent from '../../utils/setContent';

const SingleCharacterPage = () => {
  const [char, setChar] = useState(null);
  const { characterId } = useParams();
  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  console.log();
  useEffect(() => {
    updateComic(characterId);
  }, [characterId]);

  const updateComic = () => {
    clearError();
    getCharacter(characterId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  return (
    <>
      <AppBanner />
      <div className="single-comic">{setContent(process, View, char)}</div>
    </>
  );
};

const View = ({ data }) => {
  const { name, thumbnail, description } = data;
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
