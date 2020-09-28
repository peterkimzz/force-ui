<template>
  <div>
    <f-container>
      <f-title title="Sign Up Form" />
      <f-form-container @on-submit="TrySignUp">
        <f-form-flex-container title="Form">
          <f-input-container label="Email">
            <f-input block type="email" icon="Mail"></f-input>
          </f-input-container>
          <f-input-container label="Password">
            <f-input type="password" icon="Lock"></f-input>
          </f-input-container>

          <f-input-container label="Country">
            <f-select
              v-model="form.country"
              :items="[
                { title: 'United states', value: 'us' },
                { title: 'South Korea', value: 'ko' }
              ]"
            />
          </f-input-container>

          <f-input-container label="Notifications">
            <f-checkbox>Send me notification by Email</f-checkbox>
          </f-input-container>

          <f-divider></f-divider>

          <f-input-container>
            <f-checkbox>I Agree with Terms of Use</f-checkbox>
          </f-input-container>

          <f-button color="black" type="submit">Submit</f-button>
        </f-form-flex-container>
      </f-form-container>
    </f-container>

    <f-container>
      <f-title title="Hero" />

      <f-heading class="hero">Don't customize theme, just use it.</f-heading>
    </f-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        country: null
      }
    }
  },
  methods: {
    TrySignUp() {
      console.log('sign up')
    }
  }
}
</script>

<style lang="postcss" scoped>
.hero {
  @apply max-w-sm;
}
</style>