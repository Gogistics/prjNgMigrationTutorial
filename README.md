# Tutorial of Integration of Existing Application with Angular

This tutorial simply demos the integration of the existing application with Angular.


### Run applications to see how it works

* Spin up the docker container to run the existing application with Angular (SystemJS as module loader):

```sh
$ ./scripts/spin_up_koa_app.sh -m existing -a koa
```
then open your browser and go to http://192.168.99.100:8081/

Transpile files after updating Angular stuff
```sh
$ cd ngCliLazyLoading/
$ tsc -p src/
```

* Spin up the docker container to run the application with Angular (AOT):
```sh
$ ./scripts/spin_up_koa_app.sh -m migration -a koa
```
then open your browser and go to http://192.168.99.100:8081/

Rebuild Angular stuff
```sh
$ cd ngCliLazyLoading/
$ ng build --prod --aot --deploy-url /ng/ # for AOT in production mode
$ ng build --deploy-url /ng/ # for development mode
```

### Angular Testing

1. Get docker image ready for use

```sh
$ ./scripts/testing/create_docker_img_for_testing.sh 
```

2. Run unit testing and generate the coverage report under **ngCliLazyLoading/coverage/**

```sh
$ ./scripts/testing/do_unit_testing.sh 
```

3. Run e2e testing
```sh
$ ./scripts/testing/do_e2e.sh
```

### Analysis

#### ngrev
...

#### webpack-bundle-analyzer
...

---

References:

[NgModules](https://angular.io/docs/ts/latest/guide/ngmodule.html)

[Module vs Module](https://youtu.be/ntJ-P-Cvo7o)

[Docker Docs](https://docs.docker.com/)

[ngrev](https://github.com/mgechev/ngrev)

[Analyzing bundle size with the Angular CLI and Webpack](https://coryrylan.com/blog/analyzing-bundle-size-with-the-angular-cli-and-webpack)