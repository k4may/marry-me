import { Convidado } from "../types/types";

/**
 * @param convidados 
 * @returns 
 */
export const gerarTitulo = (convidados: Convidado[]): string => {
  if (convidados.length === 1) return `Convite do ${convidados[0].nome}`;
  if (convidados.length === 2) return `Convite de ${convidados[0].nome} e ${convidados[1].nome}`;
  const nomes = convidados.slice(0, convidados.length - 1).map((c) => c.nome).join(", ");
  const ultimoConvidado = convidados[convidados.length - 1].nome;
  return `Convite de ${nomes} e ${ultimoConvidado}`;
};

/**
 * @param convidados 
 * @returns
 */
export const gerarDescricao = (convidados: Convidado[]): string => {
  const dataHoraCasamento = "11 de outubro de 2024 às 16h";
  if (convidados.length === 1) return `${convidados[0].nome}, você está convidado(a) para celebrar conosco o dia mais especial de nossas vidas, o nosso casamento, que acontecerá no dia ${dataHoraCasamento}. Será uma honra ter sua presença neste momento único e inesquecível!`;
  if (convidados.length === 2) return `${convidados[0].nome} e ${convidados[1].nome}, vocês estão convidados(as) para celebrar conosco o dia mais especial de nossas vidas, o nosso casamento, que acontecerá no dia ${dataHoraCasamento}. Será uma honra ter suas presenças neste momento único e inesquecível!`;
  const nomes = convidados.slice(0, convidados.length - 1).map((c) => c.nome).join(", ");
  const ultimoConvidado = convidados[convidados.length - 1].nome;
  return `${nomes} e ${ultimoConvidado}, vocês estão convidados(as) para celebrar conosco o dia mais especial de nossas vidas, o nosso casamento, que acontecerá no dia ${dataHoraCasamento}. Será uma honra ter suas presenças neste momento único e inesquecível!`;
};

/**
 * @param convidados 
 * @returns 
 */
export const inicializarConfirmacoes = (convidados: Convidado[]): { [key: string]: boolean } => {
  const initialConfirmacoes: { [key: string]: boolean } = {};
  convidados.forEach((convidado) => {
    initialConfirmacoes[convidado.nome] = convidado.confirmado;
  });
  return initialConfirmacoes;
};