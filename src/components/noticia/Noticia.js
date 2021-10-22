import React from "react";
import img1 from "../../assets/imgs/img-noticia-1.png";

const noticias = {
  titulo:
    "Escritório Social Móvel orienta cidadãos sobre obras do Novo Mané Dendê",
  subTitulo:
    "O Escritório Social Móvel retomou seu funcionamento itinerante, nos bairros de Alto da Terezinha, Rio Sena, Ilha Amarela e Plataforma, após dois meses de dedicação exclusiva aos moradores que estão na área onde a obra do projeto Novo Mané Dendê (PNMD) está acontecendo.",
  corpo:
    "O Escritório Social Móvel retomou seu funcionamento itinerante, nos bairros de Alto da Terezinha, Rio Sena, Ilha Amarela e Plataforma, após dois meses de dedicação exclusiva aos moradores que estão na área onde a obra do projeto Novo Mané Dendê (PNMD) está acontecendo. Neste momento, as intervenções ocorrem na Avenida Tronco, no bairro de Ilha Amarela (mais conhecida como Barro Vermelho).",

  createdAt: "Criado: 15 Outubro 2021",
};
const Noticia = () => {
  return (
    <section className="mt-0">
      <div className="container">
        <div className="col-lg-12 container-noticia">
          <button className="button-voltar">
            {" "}
            <a href="/">
              Voltar <i className="fas fa-arrow-left"></i>
            </a>{" "}
          </button>
          <div className="noticia-topo">
            <h3>{noticias.titulo}</h3>
            <h1>{noticias.subTitulo}</h1>
            <p>Autor da reportagem</p>
            <p>{noticias.createdAt}</p>
          </div>
          <div className="noticia-corpo scrolling-area mt-4" id="os">
            <div className="ltr">
              <img src={img1} alt="Título Notícia" />
              <p>Legenda e autoria da foto/vídeo</p>
              <br />
              <h3>
                O Escritório Social Móvel retomou seu funcionamento itinerante,
                nos bairros de Alto da Terezinha, Rio Sena, Ilha Amarela e
                Plataforma, após dois meses de dedicação exclusiva aos moradores
                que estão na área onde a obra do projeto Novo Mané Dendê (PNMD)
                está acontecendo. Neste momento, as intervenções ocorrem na
                Avenida Tronco, no bairro de Ilha Amarela (mais conhecida como
                Barro Vermelho).
              </h3>
              <h3>
                Criado há mais de dois anos, para atender à comunidade do
                Subúrbio Ferroviário, inserida na poligonal de intervenção do
                PNMD, o escritório social opera com uma versão móvel, adaptado
                em uma van, e uma fixa, localizada na Avenida Carioca, 22, no
                bairro de Itacaranha.
              </h3>
              <h3>
                Os equipamentos contam com equipe multidisciplinar, formada por
                assistentes sociais, psicólogos, arquitetos, sociólogos e
                comunicadores, com o objetivo de acolher e orientar as famílias
                que serão reassentadas e beneficiadas, direta ou indiretamente,
                pelo projeto.
              </h3>
              <h3>
                A assistente social integrante da equipe do Escritório Social
                Móvel, Railda dos Santos, relata que as questões mais frequentes
                são dúvidas de moradores com relação as modalidades de
                compensação.
              </h3>
              <h3>
                “O proprietário de um imóvel que está na área de obras, total ou
                parcialmente, pode negociar uma das formas de compensação. Uma
                delas é o reassentamento no Residencial Novo Mané Dendê, que
                contém 260 unidades habitacionais. Outra opção para imóveis
                residenciais é o reassentamento monitorado, nessa modalidade a
                família procura um imóvel na região com características e
                valores semelhantes a sua habitação atual, a partir disso o
                imóvel será avaliado pelos engenheiros do projeto a fim de
                verificar se há boas condições de moradia, conforto e segurança.
                A Prefeitura, portanto, realiza o pagamento do imóvel escolhido
                em nome da família reassentada.", explicou.
              </h3>
              <h3>
                Ela acrescentou que a Prefeitura fornece o valor referente a 12
                meses de Apoio Moradia Temporário, para os moradores em situação
                de inquilinos, que não optarem pelo reassentamento no
                Residencial Novo Mané Dendê. Também é fornecida Ajuda Mudança,
                para que o morador possa pagar o transporte de seus pertences.
              </h3>
              <h3>
                Revitalização – A família de Eder Santana, 38 anos, vigilante e
                motorista de aplicativo, possui quatro imóveis em Plataforma.
                Ele esteve no Escritório Social Móvel, para saber quais deles
                seriam afetados pelas obras do Novo Mané Dendê.
              </h3>
              <h3>
                “Estava de passagem e parei para tirar essa dúvida. Fui muito
                bem recebido. Aliás, o projeto como um todo traz um impacto
                excelente nos bairros, com novas áreas de lazer, revitalização
                do Rio Mané Dendê e da Cachoeira d’Oxum no Parque São
                Bartolomeu, que eu conheci limpos, viraram esgoto, mas meus
                filhos vão poder desfrutar”, avaliou.
              </h3>
              <h3>
                Atendimento – Os horários de atendimento do Escritório Social
                Móvel são das 9h às 12h e das 14h às 16h, de segunda a
                quinta-feira. No último sábado do mês, ocorre o Plantão Social,
                das 9h às 12h, para moradores com dificuldade de acessar em
                atendimento nos dias úteis. Os documentos necessários para o
                atendimento no Escritório Social são RG ou CPF e, caso o imóvel
                seja cadastrado, o número da selagem.
              </h3>
              <h3>
                Projeto – Com investimento previsto de US$135 milhões, parte
                deles com recursos do Banco Interamericano de Desenvolvimento
                (BID), o maior da história de Salvador no Subúrbio Ferroviário,
                o projeto Novo Mané Dendê vai beneficiar diretamente 10 mil
                habitantes e outros 35 mil, de forma indireta, com intervenções
                nas áreas de habitação, mobilidade, saneamento básico,
                urbanização e sustentabilidade, envolvendo uma área de 800 mil
                m².
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticia;
