import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

async function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }

    throw new Error('Não foi possível comunicar com o servidor');
  });
}

async function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }

    throw new Error('Não foi possível comunicar com o servidor');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
