<template>
    <x-page class="mx-loading">
        <x-img src="data:image/png;base64,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" class="logo"/>
        <div class="base">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>
    </x-page>
</template>

<script>
export default {
    name: 'x-loading',
    props: {},
    methods: {}
}
</script>

<style lang="stylus" scoped>
.logo
  position:absolute;
  width: 40%;
  left: 30%;
  top: 20%;
  opacity .7
  animation shade 2s infinite ease-in-out;

.mx-loading
  background-color: #f3f3f3;
  font-size: 12px;

.base
  height: 9em;
  left: 50%;
  font-size: 10px;
  margin: -7.5em;
  padding: 3em;
  position: absolute;
  top: 36%;
  width: 9em;
  transform: rotateX(45deg) rotateZ(45deg);
  transform-style: preserve-3d;
  box-sizing: content-box;

.cube,
.cube:after,
.cube:before
  content: '';
  float: left;
  height: 3em;
  position: absolute;
  width: 3em;

.cube
  background-color: #0d50ba;
  position: relative;
  transform: translateZ(5em);
  transform-style: preserve-3d;
  transition: .25s;
  box-shadow: 13em 13em 1.5em rgba(0, 0, 0, 0.1);
  animation: anim 3s infinite;
  background-image: url('../assets/logo.png');
  background-size: 300% 300%;

.cube:after
  background-color: #1f60c5;
  transform: rotateX(-90deg) translate(0,3em);
  transform-origin: 100% 100%;

.cube:before
  background-color: #154592;
  transform: rotateY(90deg) translate(3em,0);
  transform-origin: 100% 0;

.cube:nth-child(1)
  animation-delay: 2s;
  background-position: 0 0;

.cube:nth-child(2)
  animation-delay: 2.05s;
  background-position: -100% 0;

.cube:nth-child(3)
  animation-delay: 2.1s;
  background-position: -200% 0;

.cube:nth-child(4)
  animation-delay: 2.15s;
  background-position: 0 -100%;

.cube:nth-child(5)
  animation-delay: 2.2s;
  background-position: -100% -100%;

.cube:nth-child(6)
  animation-delay: 2.25s;
  background-position: -200% -100%;

.cube:nth-child(7)
  animation-delay: 2.3s;
  background-position: 0 -200%;

.cube:nth-child(8)
  animation-delay: 2.35s;
  background-position: -100% -200%;

.cube:nth-child(9)
  animation-delay: 2.4s;
  background-position: -200% -200%;

@keyframes anim
  20%
    transform: translateZ(0.5em);
  60%
    transform: translateZ(5em);

@keyframes shade
  20%
    opacity 0.7;
  50%
    opacity 1;
  100%
    opacity .7;

</style>
