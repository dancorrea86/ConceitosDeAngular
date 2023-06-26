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

O componente é criado dentro da pasta APP.