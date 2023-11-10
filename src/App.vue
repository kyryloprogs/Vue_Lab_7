<template>

    <h1>Головна сторінка</h1>
    <router-link to="/todo">Перейти до Todo</router-link>
    <router-link to="/about">About</router-link>

  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>