# PlanFit
Aplicação de Desenvolvimento Web Moderno (DWM) para auxiliar instrutores ou personais a fazerem a gestão de programas de treinos e seus alunos.

## Projeto

O projeto está sendo desenvolvido em uma arquiterura cliente-servidor. O lado servidor é uma API RESTful que fornece os dados e define as regras de negócio da aplicação, enquanto o lado cliente é uma página de acesso e visualização que consome os dados do lado servidor.

O backend segue um padrão de arquitetura MVC (*Model-View-Controller*), organizando o código em três camadas distintas. Segue a modelagem:

<img src="static/proj/backend.png" alt="Design do projeto backend" width="800" height="1350"/>

O frontend ainda está em fase de prototipação e em desenvolvimento de algumas páginas. Dentre as telas disponíveis, segue abaixo os designs feitos até então:

 - Cadastro de exercício

<img src="static/prototipo_front/CadastroExerc.png" alt="Protótipo - Cadastro de exercício" width="1000" height="720"/>

 - Edição de exercício

<img src="static/prototipo_front/EditExerc.png" alt="Protótipo - Edição de exercício" width="1000" height="720"/>

 - Cadastro de plano

<img src="static/prototipo_front/CadastroPlano.png" alt="Protótipo - Cadastro de plano" width="1000" height="720"/>

 - Edição de plano

<img src="static/prototipo_front/EditPlano.png" alt="Protótipo - Edição de plano" width="1000" height="720"/>

 - Cadastro de aluno

<img src="static/prototipo_front/CadastroAluno.png" alt="Protótipo - Cadastro de aluno" width="1000" height="720"/>

 - Edição de aluno

<img src="static/prototipo_front/EditAluno.png" alt="Protótipo - Edição de aluno" width="1000" height="720"/>

 - Perfil do instrutor

<img src="static/prototipo_front/ProfileInstrutor.png" alt="Protótipo - Perfil do instrutor" width="1000" height="720"/>

## Instalação

Para executar a aplicação localmente, faça o clone do repositório, altere a URL de conexão ao mongoDB e execute os comandos no console:

```bash
npm install
npm start
```

**Obs.:** É importante verificar se o npm está instalado na sua máquina!

## Info

### Ferramentas e Tecnologias

 - Backend

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="60" height="60" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="60" height="60" />


 - Frontend

### License
[MIT](https://choosealicense.com/licenses/mit/)
