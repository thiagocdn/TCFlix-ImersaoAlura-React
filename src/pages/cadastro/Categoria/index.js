import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleFormChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://tcflix-backend.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.titulo}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategorias([...categorias, values]);
        clearForm();
      }}
      >

        <FormField
          label="Título da Categoria"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleFormChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleFormChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleFormChange}
        />

        <Button as="button">
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
          <div>
            loading...
          </div>
        )
      }

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
