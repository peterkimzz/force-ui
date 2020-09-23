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
          <f-button type="ghost">Ghost button</f-button>
        </div>
      </f-form-container>
    </f-container>

    <br />
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

    <br />
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
        <f-heading tag="h2">Dialog</f-heading>
        <f-divider />

        <f-slide v-model="slide"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos
          sit dolor animi ullam vel molestiae enim! Quae, nihil? Dicta itaque
          modi quis eum possimus ducimus laborum exercitationem, architecto
          atque.</f-slide
        >
        <f-dialog v-model="dialog"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vel
          esse commodi impedit quia accusamus vitae distinctio aspernatur
          similique sunt perspiciatis corrupti, consectetur odio perferendis
          nisi soluta, id eligendi doloremque.</f-dialog
        >

        <f-modal v-model="modal"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo
          veritatis, ipsa, autem architecto, porro natus excepturi reiciendis
          quisquam obcaecati magnam minima! Sed non consequuntur, repellendus
          velit veniam commodi odit?</f-modal
        >

        <f-button @click="slide = true">Slide open</f-button>
        <f-button @click="dialog = true">Dialog open</f-button>
        <f-button @click="modal = true">Modal open</f-button>
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
export default {
  data() {
    return {
      input: '',
      checkbox: null,
      radio: null,
      slide: false,
      dialog: false,
      modal: false
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
