import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const { request, clearError, process, setProcess } = useHttp();
  const _apiBase = 'https://marvel-server-zeta.vercel.app/';
  const _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';
  const _baseOffset = 9;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getComics = async (offset = 0) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const getAllComics = async () => {
    const res = await request(`${_apiBase}comics?${_apiKey}`);
    return res.data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
      };
    });
  };

  const getCharacters = async () => {
    const res = await request(`${_apiBase}characters?${_apiKey}`);
    return res.data.results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        thumbnail: item.thumbnail,
      };
    });
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description,
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      price: comics.prices[0].price
        ? comics.prices[0].price + '$'
        : 'not aviable',
      pagecount: comics.pageCount + ' pages',
      languages: comics.textObjects.languages,
    };
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  return {
    getCharacter,
    getAllCharacters,
    process,
    setProcess,
    clearError,
    getComics,
    getComic,
    getAllComics,
    getCharacters,
  };
};

export default useMarvelService;
