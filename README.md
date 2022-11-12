# PlanFit
Aplicação de Desenvolvimento Web Moderno com modelagem em PWA (Progressive Web App) para auxiliar instrutores ou personais a fazerem a gestão de programas de treinos e seus alunos.

## Projeto

O projeto está sendo desenvolvido em uma arquiterura cliente-servidor. O lado servidor é uma API RESTful que fornece os dados e define as regras de negócio da aplicação, enquanto o lado cliente é uma página de acesso, visualização e gestão que consome os dados do lado servidor.

O backend segue um padrão de arquitetura MVC (*Model-View-Controller*), organizando o código em três camadas distintas, conforme a modelagem:

<img src="static/proj/backend.png" alt="Design do projeto backend" width="800" height="1350"/>

O frontend ainda está em fase de prototipação e implementação das páginas. O <a href="https://www.figma.com/file/QBynbF9dgwItNtHD1bUL0e/PlanFit-Front?node-id=0%3A1&t=zYEVZ6ftXxkDG7KV-1">protótipo</a> está sendo feito no Figma.

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


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="60" height="60" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="60" height="60" />
          
          

### License
[MIT](https://choosealicense.com/licenses/mit/)
