$(function () {
    $(".my_audio").trigger('load');
  var novacasa;
  var numerodado;
  var contagem;
    var jsonorigem = objetoj;
var randomValue;
    var redpos = 1;
    var greenpos = 1;
var tipocarta;
    var min = 2;
    var max = 3;
    var random =
        Math.floor(Math.random() * (+max + 1 - +min)) + +min;

    var timeatual = 'verde';

    if (random == 2) {
        timeatual = 'vermelho';
    }

    function vezdotime(time) {
        timeatual = time;
        $('#nometime').html(time);
        
        var classe = 'success';
        var classex = 'danger';
        var contrario = 'vermelho';
        if (time == 'vermelho') {
            classe = 'danger';
            var classex = 'success';
            contrario = 'verde';
        }
        $('#nometime2').html(contrario);


        $('#menu').removeClass('text-' + classex).addClass('text-' + classe);
        $('#menu button').removeClass('btn-' + classex).addClass('btn-' + classe);
        $('#btnverqr').removeClass('btn-' + classex).addClass('btn-' + classe);
        $('#comecabtn').removeClass('btn-' + classex).addClass('btn-' + classe);
        $('#ganhoupai').addClass('bg-' + classex).removeClass('bg-' + classe);
       
    }

    function createqr(qr) {
        $('#qrcodeCanvas').html('');
        $('#qrcodeCanvas').qrcode({
            width: 300,
            height: 300,
            text: qr
        });
    }


    vezdotime(timeatual);

    function jogar() {
        $('#showtipo').hide();
        $('#contadorpai').hide();
        $('#ganhoupai').hide();
        $('#modalbg').show();
        $('.qrpai').hide();
        $('.campocentral').show();
        $('.dado').hide();
        $('.dadogif').show();
        var min = 1;
        var max = 6;
        var numerodado =
            Math.floor(Math.random() * (+max + 1 - +min)) + +min;

        setTimeout(function () {
            $('.dado').hide();
            $('.dado' + numerodado).show();


            var posinit = redpos;
            if (timeatual == 'verde') {
                posinit = greenpos;
            }

            novacasa = posinit + numerodado;

            if (novacasa > 32) {
                novacasa = 32;
            }

            var tipocarta = $('#casa-' + novacasa).data('tipo');

            
            var tipotext = 'Objeto';
            var objetoj = [    "Dentadura",    "Ar Condicionado",    "Escova de Dentes",    "Livro de Receitas",    "Crach??",    "Bra??o Mec??nico",    "Cavaquinho",    "Espremedor de Frutas",    "Luva",    "Cadeira de Balan??o",    "Ketchup",    "Bombom",    "Sanduiche",    "Mochila",    "Caderno",    "Ma??aneta",    "Comprimido (Rem??dio)",    "Prancha de Surfe",    "Rodo",    "Escada Rolante",    "Espeto",    "Bicicleta",    "Placa de Tr??nsito",    "X??cara",    "Algod??o Doce",    "Nuvem",    "Lou??a",    "Alicate",    "Gaiola",    "Panela de Press??o",    "Vestido",    "Machado",    "Gaveta",    "Telesc??pio",    "Len??o",    "Est??tua",    "Palet??",    "Palito de F??sforo",    "Revista em Quadrinhos",    "Lixeira",    "Bola de V??lei",    "Dado",    "??m?? de Geladeira",    "Bab?? Eletr??nica",    "Papel de Presente",    "Coleira",    "Raquete de T??nis",    "??culos de Grau",    "Bal??o (Ve??culo)",    "Varinha de Cond??o"];
            var acaoj = [    "Bagun??ar",    "Grampear",    "Abanar o Rabo",    "Desmontar",    "Ninar",    "Ventilar",    "Enrolar",    "Fazer a Barba",    "Morar",    "Arrumar",    "Falar com as paredes",    "Olhar-se no Espelho",    "Atropelar",    "Batizar",    "Maquiar",    "Espremer",    "Aspirar o p??",    "Escutar",    "Fofocar",    "Comemorar",    "Calar",    "Passear com o cachorro",    "Desenhar",    "Digitar",    "Espiar",    "Fazer as pazes",    "Engatinhar",    "Mastigar",    "Amar",    "Tacar fogo",    "Ligar",    "Chamar",    "Cegar",    "Fritar ovo",    "Investigar",    "Vestir-se",    "Jogar Fora",    "Contar um Segredo",    "Castigar",    "Acender",    "Imitar",    "Sair",    "Vaiar",    "Assustar",    "Enterrar",    "Levar uma surra",    "Esticar",    "Encolher",    "Brigar",    "Estacionar"];
            var dificilj = [    "Local",    "Vingan??a",    "Trote",    "Vontade",    "Vida",    "M??mica",    "Lombada",    "Verdade",    "Mutante",    "Vitamina",    "Quadriculado",    "Milion??rio",    "Susto",    "Feiticeiro",    "Esmola",    "Defeito",    "Talento",    "Mentira",    "Trag??dia",    "Pediatra",    "Imagem",    "Xingamento",    "Meia-entrada",    "Turma",    "Crise",    "Maremoto",    "Heran??a",    "Hosp??cio",    "Plant??o",    "Antena Parab??lica",    "Vida",    "Dente de Leite",    "Laborat??rio",    "Quil??metro",    "Cansa??o Mental",    "Arranha-c??u",    "Ecologia",    "Paranoia",    "Asilo",    "Pespectiva",    "F??cil",    "Dif??cil",    "Macabro",    "Pino de Boliche",    "L??mpada de LED",    "Casca de Ferida",    "Arm??rio de Cozinha",    "Girassol",    "Fotografia em Preto e Branco",    "Cal??a boca de sino"];
            var culturapopj = [    "Turma da M??nica",    "Harry Potter",    "Mulher Maravilha",    "Chiquititas",    "S??tio do Pica-pau Amarelo",    "Strange Things",    "Velozes e Furiosos",    "Star Wars",    "Sexta-Feira 13",    "O Chamado",    "Toy Story",    "Titanic",    "Jurassic Park",    "Hora de Aventura",    "Naruto",    "Senhor dos An??is",    "Auto da Compadecida",    "Avatar",    "Homem Aranha",    "Batman",    "Bob Esponja",    "A Grande Fam??lia",    "Os Simpsons",    "Netflix",    "Galv??o Bueno",    "Silvio Santos",    "Vingadores",    "Ca??a Fantasmas",    "Crep??sculo",    "Alice no Pa??s das Maravilhas",    "Irm??o do Jorel",    "Cinderela",    "Bela e a Fera",    "Game of Thrones",    "Castelo Ratimbum",    "Peppa Pig",    "Fala que Eu Te Escuto",    "Big Brother",    "Modern Family",    "Todo Mundo Odeia o Cris",    "Um maluco no Peda??o",    "Eu, a Patroa e as Crian??as",    "50 tons de cinza",    "Chaves",    "Pato Donald",    "Chapolin Colorado",    "Pernalonga",    "Pica-Pau",    "Batman",    "Tom & Jerry",    "X-Men",    "Master Chef"];
            var pessoaj = [    "Dentista",    "M??dico",    "Bombeiro",    "Enfermeiro",    "Surfista",    "Bab??",    "Jogador de V??lei",    "Veterin??rio",    "Contador",    "Telefonista",    "Prefeito",    "Caminhoneiro",    "Pintor (Constru????o Civil)",    "Ator",    "Advogado",    "Juiz (Direito)",    "Flanelinha",    "Piloto de Avi??o",    "Programador",    "Mec??nico",    "Idoso",    "Gr??vida",    "An??o",    "Chin??s",    "Ego??sta",    "Fumante",    "B??bado",    "Roqueiro",    "Sambista",    "Beb??",    "Cavalo",    "Canguru",    "Jacar??",    "Cachorro",    "Elefante",    "Girafa",    "Minhoca",    "Tubar??o",    "Abelha",    "Caracol",    "Polvo",    "Lagosta",    "??gua Viva",    "Coruja",    "Beija Flor",    "Serpente",    "Urso Panda",    "Sapo",    "Baiacu",    "Galinha"];
            var lugarj  = [    "Zool??gico",    "Supermercado",    "Pra??a",    "Igreja",    "Praia",    "Jap??o",    "Olinda",    "Fran??a",    "Rio de Janeiro",    "Shopping Center",    "Hotel",    "M??xico",    "Centro da Cidade",    "Hosp??cio",    "Hospital",    "Prefeitura",    "Montanha",    "Estrada",    "Restaurante",    "??ndia",    "Asilo",    "Academia",    "Barbearia",    "Cabeleireiro",    "It??lia",    "Egito",    "Ant??rtida",    "Gr??cia",    "Floresta",    "Deserto",    "Ilha",    "Farm??cia",    "Cinema",    "Teatro",    "Museu",    "Feira",    "SPA",    "Casa",    "Livraria",    "Biblioteca",    "Escola",    "Piscina",    "Parque de Divers??es",    "Cadeia",    "Sorveteria",    "Portugal",    "Espanha",    "Argentina",    "Frigor??fico",    "Ibura"];
        
            jsonorigem = objetoj;
            if (tipocarta == 'acao') {
                tipotext = 'A????o';
                jsonorigem = acaoj;
                
            }


            if (tipocarta == 'dificil') {
                 tipotext = 'Dif??cil';
                 jsonorigem = dificilj;
                
            }

            if (tipocarta == 'culturapop') {
                 tipotext = 'Cultura Pop';
                 jsonorigem = culturapopj;
            }


            if (tipocarta == 'pessoa') {
                 tipotext = 'Pessoa ou Animal';
                 jsonorigem = pessoaj;
            }


            if (tipocarta == 'lugar') {
                 tipotext = 'Lugar';
                 
                 jsonorigem = lugarj;
            }

            
       
        var values = Object.values(jsonorigem)

        var randomValue = values[parseInt(Math.random() * values.length)]
        createqr(randomValue);
        

            $('#tipotext').html(tipotext);
            $('#showtipo').slideDown();
        }, 1000);





    }
    $("#botaojogar").click(function () { jogar(); });
    $("#btnverqr").click(function () {
        $('.campocentral').slideUp();
      
     
        




        $('.qrpai').slideUp();
        
        setTimeout(function () {

       
        
      

        
            $('.qrpai').slideDown();

        }, 500);
    });
   
    $("#erroubtn").click(function () {
        clearInterval(contagem);
        if(timeatual == 'vermelho')
        {
            timeatual = 'verde';
        }else
        {
            timeatual = 'vermelho';
        }
        vezdotime(timeatual);
        $('#modalbg').hide();
    });

    $("#acertoubtn").click(function () {
   
      
        clearInterval(contagem);
        if(timeatual == 'vermelho')
        {
            redpos = novacasa;
        }else
        {
            greenpos = novacasa;
        }
        $('.pino'+timeatual).hide();
        $('#casa-'+novacasa+' .pino'+timeatual).show();

        if (novacasa == 32)
        {
            $('#contadorpai').hide();


            $('#ganhoupai').show();
            

        }
        if(timeatual == 'vermelho')
        {
            timeatual = 'verde';
        }else
        {
            timeatual = 'vermelho';
        }
        
        vezdotime(timeatual);
        $('#modalbg').hide();
    });


    $("#comecabtn").click(function () {
        $('.qrpai').hide();
        var contador = 60;

        $('#contador').html(contador);
        $('#contadorpai').show();

        contagem = setInterval(function(){ 
            contador = contador-1;

            if (contador == 2)
            {
            
                $(".my_audio").trigger('play');
            }

            if (contador < 0)
            {
                clearInterval(contagem);
                contador = randomValue;

            }

            $('#contador').html(contador);
         }, 1000);
              
    });






});