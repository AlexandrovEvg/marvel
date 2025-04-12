import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';
import { SingleCharacterPage } from '../pages';
import './findCharacter.scss';

const FindCharacter = () => {
  const [chars, setChars] = useState([]);
  const [charName, setCharName] = useState('');
  const [id, setId] = useState(0);
  const [visible, setVisible] = useState(false);

  const { getCharacters } = useMarvelService();

  useEffect(() => {
    getCharacters().then((res) => setChars(res));
  }, []);

  return (
    <Formik
      initialValues={{
        character: '',
      }}
      validationSchema={Yup.object({
        character: Yup.string().min(3, 'At least 2 letters'),
      })}
      onSubmit={(values) => {
        //console.log(JSON.stringify(values, null, 2));
        chars.filter(
          (item) => item.name.toLowerCase() === values.character.toLowerCase()
        ).length > 0
          ? setCharName(values.character)
          : setCharName('');
        chars.filter((item) => {
          if (item.name.toLowerCase() === values.character.toLowerCase()) {
            setId(item.id);
          } else {
            setVisible(true);
          }
        });
      }}
    >
      <Form>
        <div className="char__find">
          <div className="char__block__find">
            <label htmlFor="character" className="char__select">
              Or find a character by name:
            </label>
            <Field
              className="char__input"
              name="character"
              type="text"
              placeholder="Enter name"
            />
            <ErrorMessage className="error" name="character" component="div" />
            {charName ? (
              <FindMessage name={charName} />
            ) : (
              <NotFindMessage visible={visible} />
            )}
          </div>
          <div>
            <button className="button button__main button__find" type="submit">
              <div className="inner">find</div>
            </button>
            <Link
              to={`/characters/${id}`}
              element={<SingleCharacterPage />}
              className="button button__secondary button__find__active"
              style={charName ? { display: 'block' } : { display: 'none' }}
            >
              <div className="inner">to page</div>
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

const FindMessage = ({ name }) => {
  return (
    <>
      <div className="find">There is! Visit {name} page?</div>
    </>
  );
};

const NotFindMessage = ({ visible }) => {
  return (
    <>
      <div
        className="error"
        style={!visible ? { display: 'none' } : { display: 'block' }}
      >
        The character was not found. Check the name and try again
      </div>
    </>
  );
};

export default FindCharacter;
