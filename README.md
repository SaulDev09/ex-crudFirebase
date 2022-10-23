Demo Here (https://codesandbox.io/p/github/SaulDev09/ex-crudFirebase/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cl9kkvq6q001dlsengg2g0dte%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A4200%252C%2522key%2522%253A%2522cl9kkwmp4006v3b6hjnogkumj%2522%252C%2522isMinimized%2522%253Afalse%252C%2522path%2522%253A%2522%252Fusers%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522cl9kkw0u1004u3b6hg6bwlywe%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D)

avoid jasmine error update node, npm, angular CLI:
open package.json => "jasmine-core": "~3.4.0", -> "jasmine-core": "~3.8.0",
npm i

update:
ng version 

node:
node -v
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
alternatively: sudo n 0.8.20

npm:
sudo npm update -g npm

Angular CLI (14.x):
sudo npm install -g @angular/cli@latest

First Step:
ng new exCrudFirebase
routing -> no
type -> css

Next:
ng g m appRouting --flat
ng g c pages/users
ng g c pages/user

ng g s services/users
npm i sweetalert2

https://getbootstrap.com/docs/5.2/getting-started/introduction/
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

https://fontawesome.com/
	<script src="https://kit.fontawesome.com/8d37e4c24f.js" crossorigin="anonymous"></script>

https://animate.style/


# ExCrudFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
