<template>
  <div>
    <div class="pb-20">
      <f-navigation-bar>
        <div slot="logo">
          <f-image
            :src="require('~/assets/svgs/forceui_text_logo.svg')"
            alt="Force UI"
            class="w-28"
          />
        </div>

        <div slot="menu">
          <f-navigation-bar-item href="/labs">Labs</f-navigation-bar-item>
          <f-navigation-bar-item
            href="https://github.com/peterkimzz/force-ui"
            target="_blank"
            >Github</f-navigation-bar-item
          >
        </div>
      </f-navigation-bar>

      <nuxt />
    </div>
  </div>
</template>
