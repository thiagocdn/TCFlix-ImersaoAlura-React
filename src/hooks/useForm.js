import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  function handleFormChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return {
    values,
    handleFormChange,
    clearForm,
  };
}

export default useForm;
