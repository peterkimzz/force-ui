<template>
  <div id="page">
    <f-container>
      <f-heading>Force UI 🚀</f-heading>
    </f-container>

    <f-container>
      <f-form-container>
        <f-heading tag="h2">Headings</f-heading>
        <f-divider />

        <f-heading tag="h1">Heading 1</f-heading>
        <f-heading tag="h2">Heading 2</f-heading>
        <f-heading tag="h3">Heading 3</f-heading>
        <f-heading tag="h4">Heading 4</f-heading>
        <f-heading tag="h5">Heading 5</f-heading>
        <f-heading tag="h6">Heading 6</f-heading>
      </f-form-container>
    </f-container>

    <br />
    <f-container>
      <f-form-container>
        <f-heading tag="h2">Buttons</f-heading>
        <f-divider />

        <div>
          <f-button size="small">Small button</f-button>
          <f-button>Medium button</f-button>
          <f-button size="large">Large button</f-button>
        </div>

        <div>
          <f-button size="small">수정</f-button>
          <f-button size="medium">발행하기</f-button>
          <f-button size="large">시작하기</f-button>
        </div>
      </f-form-container>
    </f-container>

    <f-container>
      <f-form-container>
        <f-heading tag="h2">Checkboxes</f-heading>
        <f-divider />

        <div>
          <f-checkbox v-model="checkbox"
            >Agree with privacy policy & terms</f-checkbox
          >
        </div>
      </f-form-container>
    </f-container>

    <f-container>
      <f-form-container>
        <f-heading tag="h2">Radios</f-heading>
        <f-divider />

        <div>
          <f-radio v-model="radio" label="1">First</f-radio>
          <f-radio v-model="radio" label="2">Second</f-radio>
          <div>value: {{ radio }}</div>
        </div>
      </f-form-container>
    </f-container>

    <br />
    <f-container>
      <f-form-container type="error">
        <f-heading tag="h2">Inputs</f-heading>
        <f-divider />

        <div>
          <f-input v-model="input" size="small" />
          <f-input v-model="input" size="medium" />
          <f-input v-model="input" size="large" />
          <div>value: {{ input }}</div>
        </div>
      </f-form-container>
    </f-container>

    <br />
    <f-container>
      <f-form-container>
        <f-heading tag="h2">Links</f-heading>
        <f-divider />

        <div>
          <f-link href="/links">Default</f-link>
          <f-link href="/links" type="button">Button</f-link>
        </div>
      </f-form-container>
    </f-container>
  </div>
</template>

<script>
// import path from './test.json'
export default {
  data() {
    return {
      input: '',
      checkbox: null,
      radio: null
    }
  },
  mounted() {
    // const svgContainer = document.getElementById('svgContainer')
    // const animItem = bodymovin.loadAnimation({
    //   wrapper: svgContainer,
    //   renderer: 'svg',
    //   loop: true,
    //   animationData: path
    // })
    // 'https://assets7.lottiefiles.com/private_files/lf30_ToTspb.json'
    //   'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
  },
  methods: {
    async FetchImage() {
      try {
        const result = await this.$axios.get(
          `https://unavatar.now.sh/github/peterkimzz`
        )
        this.src = data
      } catch (err) {}
    }
  }
}
</script>

<style lang="postcss" scoped>
#svgContainer {
  width: 100%;
  height: 100%;
  background-color: #1e1c26;
}
</style>
