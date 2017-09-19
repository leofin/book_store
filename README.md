# README

Ruby version:

 - ruby 2.3.3p222 (2016-11-21 revision 56859) [x86_64-linux]
Rails varsion:

 - Rails 5.0.0.1

System dependencies:

1- Docker

2- Docker-compose

Configuration:

Download and install docker and docker-compose
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-14-04

Install docker:
 
 1- wget -qO- https://get.docker.com/ | sh
 
 2- sudo apt-get -y install python-pip (optional)

Install docker-compose:
 
 1- sudo apt-get -y install python-pip
 
 2- sudo pip install docker-compose

Database creation:

- rake db:create db:migrate
- Deployment instructions
- After installed docker and docker-compose
 
 1- git clone git@github.com:leofin/book_store.git
 
 2- cd book_store
 
 3- docker build .
 
 4- docker-compose up
 
 5- Access localhost:3000

----------------------------------------------------------------------------------------------------------

Arquitetura/Design:

Foi feito um crud basico utilizando `rails generate` para o modelo Book e seus controllers, utilizado a gema Devise(https://github.com/plataformatec/devise) para fazer a autenticação do modelo Admin, foi deixado com a tela de login basica, permitindo a criação de usuarios novos atualmente para facilitar o uso, futuramente poderia ser feita uma nova tela de login sem a opção de criar usuario.

Feito uma API para a consulta dos livros com parametros via URL, com filtros de pesquisa , ordenação e paginação. Não foi colocado indices no banco de dados por ser apenas um projeto simples, porém seria necessario para a performance de um sistema real.

Feito um controller apenas para renderizar a pagina de pesquisa respondendo como pagina principal na rota `/`, o HTML é independende do rails, interagindo apenas com um arquivo javascript, foi deixado as extensões .erb para o javascript conseguir utilizar as variaveis de ambiente do rails, porém nada impede de ser colocado hardcoded e extrair esse html e javascript do projeto rails. Foi utilizando JQuery para manipulação de elementos no HTML.

Não foi feito specs, além dos gerados por padrão do modelo e controle.

Utilização:

Foi colocado o projeto para rodar num ambiente Heroku como ambiente de produção.

Acessar https://book-store-fin.herokuapp.com/

Irá direcionar para o index do projeto com a pagina de pesquisa de livros.

Clicando no texto "Cadastrar novos livros", será direcionado para a pagina de login, após loggar ou cadastrar um novo usuario, será direcionado para a pagina de listagem de livros cadastrados, permitindo a edição, exibição, deleção e inserção de novos livros no sistema.

Desejando voltar para a tela anterior só clicar no botão "Search page".

Foi feito em ingles as telas de crud de livro e a tela de pesquisa em português por decisões proprias.
