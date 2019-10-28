import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Classe } from './styles';
import Switch from 'react-switch';

export default function Dashboard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const response = await api.get('contaturma');
      const arrayContaTurma = response.data.contaTurma.map(x => ({
        id: x.id,
        idconta: x.idconta,
        idturma: x.idturma,
        conta: response.data.contas
          .filter(z => z.id === x.idconta)
          .map(x => x.conta)[0],
      }));

      const arrayTurma = response.data.turmas.map(x => ({
        id: x.id,
        nome: x.nome,
        listContaTurma: arrayContaTurma.filter(z => z.idturma == x.id),
        listConta: response.data.contas,
      }));

      setCards(arrayTurma);
    }

    loadCards();
  }, []);

  async function handleChange(data) {
    console.log(data);
    await api.post('contaturma', data);
  }

  return (
    <Container>
      <h2>PAINEL DE CONTROLE</h2>
      <ul>
        {cards.map(x => (
          <Classe>
            <strong>TURMA: {x.nome}</strong>
            {x.listConta.map(z => (
              <>
                <span>{z.conta}</span>
                <Switch
                  onChange={() =>
                    handleChange({ idturma: x.id, idconta: z.id })
                  }
                  checked={
                    x.listContaTurma.filter(y => y.idconta === z.id).length > 0
                  }
                />
                {}
              </>
            ))}
          </Classe>
        ))}
      </ul>
    </Container>
  );
}
