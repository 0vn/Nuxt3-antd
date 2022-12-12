export default defineNuxtRouteMiddleware((to, from) => {
  function sayHello(params: string) {
    console.log(`Hello, ${params}`);
  }

  let user: string = 111;
  sayHello(user);
});
