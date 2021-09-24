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
            var objetoj = [    "Dentadura",    "Ar Condicionado",    "Escova de Dentes",    "Livro de Receitas",    "Crachá",    "Braço Mecânico",    "Cavaquinho",    "Espremedor de Frutas",    "Luva",    "Cadeira de Balanço",    "Ketchup",    "Bombom",    "Sanduiche",    "Mochila",    "Caderno",    "Maçaneta",    "Comprimido (Remédio)",    "Prancha de Surfe",    "Rodo",    "Escada Rolante",    "Espeto",    "Bicicleta",    "Placa de Trânsito",    "Xícara",    "Algodão Doce",    "Nuvem",    "Louça",    "Alicate",    "Gaiola",    "Panela de Pressão",    "Vestido",    "Machado",    "Gaveta",    "Telescópio",    "Lenço",    "Estátua",    "Paletó",    "Palito de Fósforo",    "Revista em Quadrinhos",    "Lixeira",    "Bola de Vôlei",    "Dado",    "Ímã de Geladeira",    "Babá Eletrônica",    "Papel de Presente",    "Coleira",    "Raquete de Tênis",    "Óculos de Grau",    "Balão (Veículo)",    "Varinha de Condão"];
            var acaoj = [    "Bagunçar",    "Grampear",    "Abanar o Rabo",    "Desmontar",    "Ninar",    "Ventilar",    "Enrolar",    "Fazer a Barba",    "Morar",    "Arrumar",    "Falar com as paredes",    "Olhar-se no Espelho",    "Atropelar",    "Batizar",    "Maquiar",    "Espremer",    "Aspirar o pó",    "Escutar",    "Fofocar",    "Comemorar",    "Calar",    "Passear com o cachorro",    "Desenhar",    "Digitar",    "Espiar",    "Fazer as pazes",    "Engatinhar",    "Mastigar",    "Amar",    "Tacar fogo",    "Ligar",    "Chamar",    "Cegar",    "Fritar ovo",    "Investigar",    "Vestir-se",    "Jogar Fora",    "Contar um Segredo",    "Castigar",    "Acender",    "Imitar",    "Sair",    "Vaiar",    "Assustar",    "Enterrar",    "Levar uma surra",    "Esticar",    "Encolher",    "Brigar",    "Estacionar"];
            var dificilj = [    "Local",    "Vingança",    "Trote",    "Vontade",    "Vida",    "Mímica",    "Lombada",    "Verdade",    "Mutante",    "Vitamina",    "Quadriculado",    "Milionário",    "Susto",    "Feiticeiro",    "Esmola",    "Defeito",    "Talento",    "Mentira",    "Tragédia",    "Pediatra",    "Imagem",    "Xingamento",    "Meia-entrada",    "Turma",    "Crise",    "Maremoto",    "Herança",    "Hospício",    "Plantão",    "Antena Parabólica",    "Vida",    "Dente de Leite",    "Laboratório",    "Quilômetro",    "Cansaço Mental",    "Arranha-céu",    "Ecologia",    "Paranoia",    "Asilo",    "Pespectiva",    "Fácil",    "Difícil",    "Macabro",    "Pino de Boliche",    "Lâmpada de LED",    "Casca de Ferida",    "Armário de Cozinha",    "Girassol",    "Fotografia em Preto e Branco",    "Calça boca de sino"];
            var culturapopj = [    "Turma da Mônica",    "Harry Potter",    "Mulher Maravilha",    "Chiquititas",    "Sítio do Pica-pau Amarelo",    "Strange Things",    "Velozes e Furiosos",    "Star Wars",    "Sexta-Feira 13",    "O Chamado",    "Toy Story",    "Titanic",    "Jurassic Park",    "Hora de Aventura",    "Naruto",    "Senhor dos Anéis",    "Auto da Compadecida",    "Avatar",    "Homem Aranha",    "Batman",    "Bob Esponja",    "A Grande Família",    "Os Simpsons",    "Netflix",    "Galvão Bueno",    "Silvio Santos",    "Vingadores",    "Caça Fantasmas",    "Crepúsculo",    "Alice no País das Maravilhas",    "Irmão do Jorel",    "Cinderela",    "Bela e a Fera",    "Game of Thrones",    "Castelo Ratimbum",    "Peppa Pig",    "Fala que Eu Te Escuto",    "Big Brother",    "Modern Family",    "Todo Mundo Odeia o Cris",    "Um maluco no Pedaço",    "Eu, a Patroa e as Crianças",    "50 tons de cinza",    "Chaves",    "Pato Donald",    "Chapolin Colorado",    "Pernalonga",    "Pica-Pau",    "Batman",    "Tom & Jerry",    "X-Men",    "Master Chef"];
            var pessoaj = [    "Dentista",    "Médico",    "Bombeiro",    "Enfermeiro",    "Surfista",    "Babá",    "Jogador de Vôlei",    "Veterinário",    "Contador",    "Telefonista",    "Prefeito",    "Caminhoneiro",    "Pintor (Construção Civil)",    "Ator",    "Advogado",    "Juiz (Direito)",    "Flanelinha",    "Piloto de Avião",    "Programador",    "Mecânico",    "Idoso",    "Grávida",    "Anão",    "Chinês",    "Egoísta",    "Fumante",    "Bêbado",    "Roqueiro",    "Sambista",    "Bebê",    "Cavalo",    "Canguru",    "Jacaré",    "Cachorro",    "Elefante",    "Girafa",    "Minhoca",    "Tubarão",    "Abelha",    "Caracol",    "Polvo",    "Lagosta",    "Água Viva",    "Coruja",    "Beija Flor",    "Serpente",    "Urso Panda",    "Sapo",    "Baiacu",    "Galinha"];
            var lugarj  = [    "Zoológico",    "Supermercado",    "Praça",    "Igreja",    "Praia",    "Japão",    "Olinda",    "França",    "Rio de Janeiro",    "Shopping Center",    "Hotel",    "México",    "Centro da Cidade",    "Hospício",    "Hospital",    "Prefeitura",    "Montanha",    "Estrada",    "Restaurante",    "Índia",    "Asilo",    "Academia",    "Barbearia",    "Cabeleireiro",    "Itália",    "Egito",    "Antártida",    "Grécia",    "Floresta",    "Deserto",    "Ilha",    "Farmácia",    "Cinema",    "Teatro",    "Museu",    "Feira",    "SPA",    "Casa",    "Livraria",    "Biblioteca",    "Escola",    "Piscina",    "Parque de Diversões",    "Cadeia",    "Sorveteria",    "Portugal",    "Espanha",    "Argentina",    "Frigorífico",    "Ibura"];
        
            jsonorigem = objetoj;
            if (tipocarta == 'acao') {
                tipotext = 'Ação';
                jsonorigem = acaoj;
                
            }


            if (tipocarta == 'dificil') {
                 tipotext = 'Difícil';
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