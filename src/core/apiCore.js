import { API } from "../config";

export const listUsers = (userId, token) => {
  return fetch(`${API}/users/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listUsersByName = (userId, token) => {
  return fetch(`${API}/users/name/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const recuperarSenha = (userId, email) => {
  const userRecuperar = { userId, email };
  return fetch(`${API}/user/recuperar/${userId}/${email}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRecuperar),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const recuperar = (_id, password) => {
  const recuperar = { _id, password };
  return fetch(`${API}/user/recuperar/${_id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recuperar),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userByEmail = (email) => {
  return fetch(`${API}/user/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUser = (userId) => {
  return fetch(`${API}/user/dados/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (userDelete, userId, token) => {
  return fetch(`${API}/user/${userDelete}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUserRole = (userId, token, user) => {
  return fetch(`${API}/user/role/${userId}`, {
    method: "PUT",
    headers: {
      // content type?
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listLogs = (userId, token) => {
  return fetch(`${API}/logs/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteLog = (logDelete, userId, token) => {
  return fetch(`${API}/log/${logDelete}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createLog = (userId, token, log) => {
  return fetch(`${API}/log/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(log),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const novoCadastro = (email, nome, _id) => {
  const data = {
    nome,
    email,
    _id,
  };

  return fetch(`${API}/novo-cadastro/enviar`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUserDados = (userId, token, user) => {
  return fetch(`${API}/user/dados/${userId}`, {
    method: "PUT",
    headers: {
      // content type?
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const criarCategoria = (userId, token, categoria) => {
  return fetch(`${API}/categoria/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(categoria),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCategorias = () => {
  return fetch(`${API}/categorias`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteCategoria = (slug, userId, token) => {
  return fetch(`${API}/categoria/${slug}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createBlog = (userId, token, blog) => {
  return fetch(`${API}/noticia/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBlog = (slug, userId, token) => {
  return fetch(`${API}/noticia/${slug}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateBlog = (slug, userId, token, blog) => {
  return fetch(`${API}/noticia/${userId}/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBlog = (slug) => {
  return fetch(`${API}/noticia/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBlogs = () => {
  return fetch(`${API}/noticias`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProjeto = (slug) => {
  return fetch(`${API}/projeto/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const updateProjeto = (slug, userId, token, projeto) => {
  return fetch(`${API}/projeto/${userId}/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: projeto,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const criarProjeto = (userId, token, projeto) => {
  return fetch(`${API}/projeto/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: projeto,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProjetos = () => {
  return fetch(`${API}/projetos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteProjeto = (slug, userId, token) => {
  return fetch(`${API}/projeto/${slug}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createEixo = (userId, token, eixo) => {
  return fetch(`${API}/eixo/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: eixo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteEixo = (slug, userId, token) => {
  return fetch(`${API}/eixo/${slug}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateEixo = (slug, userId, token, eixo) => {
  return fetch(`${API}/eixo/${userId}/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: eixo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getEixo = (slug) => {
  return fetch(`${API}/eixo/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getEixos = () => {
  return fetch(`${API}/eixos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createCarta = (userId, token, carta) => {
  return fetch(`${API}/carta/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: carta,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCarta = (slug, userId, token) => {
  return fetch(`${API}/carta/${slug}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateCarta = (slug, userId, token, carta) => {
  return fetch(`${API}/carta/${userId}/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: carta,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCarta = (slug) => {
  return fetch(`${API}/carta/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCartas = () => {
  return fetch(`${API}/cartas`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createSlider = (userId, token, slider) => {
  return fetch(`${API}/slider/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: slider,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteSlider = (sliderId, userId, token) => {
  return fetch(`${API}/slider/${sliderId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateSlider = (sliderId, userId, token, slider) => {
  return fetch(`${API}/slider/${userId}/${sliderId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: slider,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSlider = (sliderId) => {
  return fetch(`${API}/slider/${sliderId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSliders = () => {
  return fetch(`${API}/sliders`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createBanner = (userId, token, banner) => {
  return fetch(`${API}/banner/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: banner,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBanner = (bannerId, userId, token) => {
  return fetch(`${API}/banner/${bannerId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateBanner = (bannerId, userId, token, banner) => {
  return fetch(`${API}/banner/${userId}/${bannerId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: banner,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBanner = (bannerId) => {
  return fetch(`${API}/banner/${bannerId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBanners = () => {
  return fetch(`${API}/banners`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createSelo = (userId, token, selo) => {
  return fetch(`${API}/selo/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: selo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteSelo = (seloId, userId, token) => {
  return fetch(`${API}/selo/${seloId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateSelo = (seloId, userId, token, selo) => {
  return fetch(`${API}/selo/${userId}/${seloId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: selo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSelo = (seloId) => {
  return fetch(`${API}/selo/${seloId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSelos = () => {
  return fetch(`${API}/selos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createArquivo = (userId, token, arquivo) => {
  return fetch(`${API}/arquivo/criar/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: arquivo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteArquivo = (arquivoId, userId, token) => {
  return fetch(`${API}/arquivo/${arquivoId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateArquivo = (arquivoId, userId, token, arquivo) => {
  return fetch(`${API}/arquivo/${userId}/${arquivoId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: arquivo,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getArquivo = (arquivoId) => {
  return fetch(`${API}/arquivo/pdf/${arquivoId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getArquivos = () => {
  return fetch(`${API}/arquivos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
