# Tutorial of Integration of Existing Application with Angular
This tutorial simply demos the integration of the existing application with Angular.

Spin up the docker container to see the existing application:

```sh
$ ./scripts/spin_up_koa_app.sh -m existing -a koa
```
then open your browser and go to http://192.168.99.100:8081/

Spin up the docker container to see the integration of existing application with Angular:
```sh
$ ./scripts/spin_up_koa_app.sh -m migration -a koa
```
then open your browser and go to http://192.168.99.100:8081/

---

References:

[NgModules](https://angular.io/docs/ts/latest/guide/ngmodule.html)

[Module vs Module](https://youtu.be/ntJ-P-Cvo7o)

[Docker Docs](https://docs.docker.com/)