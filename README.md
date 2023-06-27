# Projeto com resumo do Angular

Projeto pessoal para entendimento dos principais conceitos do Angular.

# Criando um componente no Angular

Para criar um componente utilize o comando:

> ng generate component Home --standalone --inline-template --skip-tests

Explicando o comando:
- ng: Basico do Angular
- generate: Cria ou edita um componente
- Home: Nome do componente
- --standalone: Creates an application based upon the standalone API, without NgModules.
- --inline-template: Include template inline in the root component.ts file. Default is false, meaning that an external template file is created and referenced in the root component.ts file. - Aliases: -t
- --skip-tests: Do not create "spec.ts" test files for the application. Aliases: -S

Documentação com explicação: https://angular.io/cli/generate

O componente é criado dentro da pasta APP. A documentação do Angular está na página https://angular.io/tutorial/first-app/first-app-lesson-02.

# Roteamento da aplicação

Crie um arquivo "routes.ts" na pasta "app" do projeto. Importe os os módulos que serão roteados, e crie uma const de routeConfig, conforme abaixo:

>import { Routes } from '@angular/router';
>import { HomeComponent } from './home/home.component';
>import { DetailsComponent } from './details/details.component';

>const routeConfig: Routes = [
>    {
>      path: '',
>      component: HomeComponent,
>      title: 'Home page'
>    },
>    {
>      path: 'details',
>      component: DetailsComponent
>    }
>  ];
>  
>  export default routeConfig;

Na classe main, inclua o providerouter

>provideRouter(routeConfig)

Importe o módulu "RouterModule" no componente onde será utilizado o routerLink.

Insira o routerlink conforme deseja.

><p>Para mudar de página clique <a routerLink="/details">aqui</a>!</p><br>