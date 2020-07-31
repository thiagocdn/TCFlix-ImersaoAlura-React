import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriesTitle = categorias.map(({ titulo }) => titulo);
  const { handleFormChange, values } = useForm({
    titulo: 'Review bootcamp',
    url: 'https://www.youtube.com/watch?v=iIq3WJg_Hkg',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((response) => {
      setCategorias(response);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((item) => item.titulo === values.categoria);

        if (!categoriaEscolhida) {
          alert('Categoria inexistente!');
          return;
        }

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          // eslint-disable-next-line no-alert
          alert('Vídeo cadastrado!');
          history.push('/');
        });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleFormChange}
        />

        <FormField
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleFormChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleFormChange}
          suggestions={categoriesTitle}
        />

        <Button as="button" type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
