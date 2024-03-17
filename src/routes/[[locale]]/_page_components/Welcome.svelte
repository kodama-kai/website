<!--
  --------------------------------------------- 
  ---------------- KODAMA KAI ----------------- 
  --------------------------------------------- 
  Author: Adnan Faize                           
  Copyright (c) Kodama Kai, All Rights Reserved 
  --------------------------------------------- 
  --------------------------------------------- 
-->

<script lang="ts">

</script>

<section class="slider">
  <div class="slider__slides">
    <article class="slider__slide slider__slide--blue">
      <div class="slide__inner">
        <div class="slide__mask">
          <div class="slide__mask-inner" />
        </div>
        <div class="slide__content">
          <h2 class="slide__heading">
            <div class="slide__heading-line">
              <span>Project</span>
            </div>
            <div class="slide__heading-line">
              <span>K-OS</span>
            </div>
          </h2>
          <p class="slide__description">
            Hello World!
          </p>
          <button class="slide__btn">
            Know More
          </button>
        </div>
      </div>
    </article>
    <article class="slider__slide slider__slide--black">

    </article>
    <article class="slider__slide slider__slide--red">

    </article>
    <article class="slider__slide slider__slide--green">

    </article>
  </div>
  <nav class="slider__controls">
    <button class="controls__pause">

    </button>
    <div class="controls__bgs">
      <div class="controls__bg controls__bg--blue" />
      <div class="controls__bg controls__bg--black" />
      <div class="controls__bg controls__bg--red" />
      <div class="controls__bg controls__bg--green" />
    </div>
    <div class="controls__btns">
      <button class="controls__btn">
        K-OS
        <span class="controls__progress" />
      </button>
      <button class="controls__btn">
        TNO
        <span class="controls__progress" />
      </button>
      <button class="controls__btn">

        <span class="controls__progress" />
      </button>
      <button class="controls__btn">

        <span class="controls__progress" />
      </button>
    </div>
  </nav>
</section>

<style>
  *, *:before, *:after {
    box-sizing: border-box;
  }

  .slider {
    --sliding-at: 1s;
    --sliding-delay: calc(var(--sliding-at) / 3 * 2);
    --mask-at: calc(var(--sliding-at) * 0.7);
    --heading-at: calc(var(--sliding-at) * 1.5);
    --control-at: calc(var(--sliding-at) / 2);

    --easing: ease-in-out;
    --blend-mode: luminosity;

    --content-left: 40%;
    --content-top: 40%;

    --heading-padding: 30px;
    --heading-font-size: 100px;

    --mask-top: 15%;
    --mask-right: calc(100% - var(--content-left));
    --mask-height: calc(67dvh - var(--width));
    --mask-width: calc(var(--mask-height) * 0.75);

    overflow: hidden;
    position: relative;
    height: calc(100dvh - var(--width));
  }

  .slider__slides {
    position: relative;
    height: 100%;
    transition: transform var(--sliding-at) var(--sliding-delay);
  }

  .slider__slide {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(0,0,0);

    &.m--before-sliding {
      z-index: 2 !important;
      transform: translate3d(100%,0,0);

      & .slide__inner {
        transform: translate3d(-100%,0,0);
      }

      & .slide__mask {
        transform: rotate(calc(var(--deg) * -1)) translate3d(var(--x-offset),0,0);
        opacity: 0;
      }

      & .slide__mask-inner {
        transform: translateY(var(--y-offset)) rotate(var(--deg)) translateX(calc(var(--x-offset) * -1)) translateZ(0);
      }
      
      & .slide__heading-line {
        transform: translateY(100%);

        & span {
          transform: translateY(-100%);
        }
      }
    }

    &.m--active-slide {
      z-index: 1;
      transition: transform var(--sliding-at) var(--sliding-delay) var(--easing);
      transform: translate3d(0,0,0);

      & .slide__inner {
        transition: transform var(--sliding-at) var(--sliding-delay) var(--easing);
        transform: translate3d(0,0,0);
      }

      & .slide__mask {
        transition: transform var(--mask-at) var(--active-delay), opacity calc(var(--mask-at) / 2) var(--active-delay);
        transform: translate3d(0,0,0);
        opacity: 1;
      }

      & .slide__mask-inner {
        transition: transform var(--mask-at) var(--active-delay);
        transform: translateX(0);
      }
      
      & .slide__heading-line {
        transition: transform var(--heading-at) calc(var(--sliding-delay) * 1.5);
        transform: translateY(0);

        & span {
          transition: transform var(--heading-at) calc(var(--sliding-delay) * 1.5);
          transform: translateY(0);
        }
      }
    }

    &.m--previous-slide {
      & .slide__mask {
        transition: transform var(--mask-at) calc(var(--sliding-delay) / 2), opacity calc(var(--mask-at) / 2) calc(var(--mask-at) / 2 + var(--sliding-delay) / 2);
        transform: rotate(var(--deg)) translate3d(calc(var(--x-offset) * -1),0,0);
        opacity: 0;
      }

      & .slide__mask-inner {
        transition: transform var(--mask-at) calc(var(--sliding-delay) / 2);
        transform: translateY(var(--y-offset)) rotate(calc(var(--deg) * -1)) translateX(var(--x-offset)) translateZ(0);
      }

      & .slide__heading-line {
        transition: transform var(--heading-at);
        transform: translateY(-100%);

        & span {
          transition: transform var(--heading-at);
          transform: translateY(100%);
        }
      }

      /**<!-- TODO: do the same as heading line for description and btn*/
    }
  }
  
  .slide__inner {
    position: relative;
    height: 100%;
    background-size: cover;
    background-position: center top;
    transform: translate3d(0,0,0);
  }

  .slide__mask {
    --active-delay: calc(var(--sliding-at) + var(--sliding-delay) / 3);
    --x-offset: 200px;
    --y-offset: 0;
    --deg: 10deg;

    overflow: hidden;
    z-index: 1;
    position: absolute;
    right: var(--mask-right);
    top: var(--mask-top);
    width: var(--mask-width);
    height: var(--mask-height);
    margin-right: calc(var(--heading-padding) * -3);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 6vh 0, 6vh 61vh, 44vh 61vh, 44vh 6vh, 6vh 6vh);
    transform-origin: 50% 0;
    transition-timing-function: var(--easing);
  }

  .slide__mask-inner {
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100wh;
    height: calc(100dvh - var(--width));
    margin-left: -50vw;
    margin-top: -50dvh;
    background-size: cover;
    background-position: center center;
    background-blend-mode: var(--blend-mode);
    transform-origin: 50% calc((100dvh - var(--mask-height) - var(--width)) / 2);
    transition-timing-function: var(--easing);
  }

  .slide__content {
    z-index: 2;
    position: absolute;
    left: var(--content-left);
    top: var(--content-top);
  }

  .slide__heading {
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .slide__heading-line {
    overflow: hidden;
    position: relative;
    padding-right: 20px;
    font-size: var(--heading-font-size);
    color: #fff000; /* <!--TODO*/
    word-spacing: 10px;

    &:nth-child(2) {
      padding-left: var(--heading-padding);
    }

    & span {
      display: block;
    }
  }

  .slide__description {
    /*<!--TODO*/
  }

  .slide__btn {
    /*<!--TODO*/
  }

  .slider__controls {
    z-index: 5;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .controls__bgs {
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  /**<!-- TODO: finish him xd (see style.scss line 329)*/
  .controls__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .controls__btns {
    font-size: 0;
  }

  .controls__btn {
    --btn-width: 100px;

    overflow: hidden;
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: var(--btn-width);
    height: 50px;
    font-size: 14px;
    color: #fff000; /*<!--TODO*/
    text-transform: uppercase;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color var(--control-at);
  }

  .controls__progress {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fff000; /*<!--TODO*/
    transform-origin: 0 50%;
    transform: scaleX(0);
    transition-timing-function: var(--easing);
  }
</style>