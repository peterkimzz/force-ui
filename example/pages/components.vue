<template>
  <div id="page">
    <f-container>
      <f-title
        sub-title="Force UI"
        title="Components"
        description="Don't customize theme, just use it - Made by Tailwind CSS"
      />
    </f-container>

    <div class="space-y-8">
      <!-- Headings -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Headings" description="1 to 6 choices">
            <div class="space-y-2">
              <f-heading tag="h1">H1. Heading 1</f-heading>
              <f-heading tag="h2">H2. Heading 2</f-heading>
              <f-heading tag="h3">H3. Heading 3</f-heading>
              <f-heading tag="h4">H4. Heading 4</f-heading>
              <f-heading tag="h5">H5. Heading 5</f-heading>
              <f-heading tag="h6">H6. Heading 6</f-heading>
            </div>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Buttons -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Buttons">
            <div class="space-x-2">
              <f-button size="small">Small button</f-button>
              <f-button>Medium button</f-button>
              <f-button size="large">Large button</f-button>
            </div>

            <div class="space-x-2">
              <f-button plain size="small">Small plain button</f-button>
              <f-button plain>Medium plain button</f-button>
              <f-button plain size="large">Large plain button</f-button>
            </div>

            <div class="space-x-2">
              <f-button color="black" size="small">Small black button</f-button>
              <f-button color="black">Medium black button</f-button>
              <f-button color="black" size="large">Large black button</f-button>
            </div>

            <div class="space-x-2">
              <f-button color="ghost" size="small">Ghost button</f-button>
              <f-button color="ghost">Ghost button</f-button>
              <f-button color="ghost" size="large">Ghost button</f-button>
            </div>

            <div class="space-x-2">
              <f-button prefix-icon="Plus">Add to favorite</f-button>
              <f-button loading color="black" />
            </div>
          </f-form-flex-container>
          <f-divider />
          <f-form-flex-container title="Social buttons">
            <f-input-container label="Sign in">
              <f-button prefix-icon="Google">Sign in with Google</f-button>
              <f-button prefix-icon="Facebook">Sign in with Facebook</f-button>
            </f-input-container>
            <f-input-container label="Continue">
              <f-button prefix-icon="Github">Continue with Github</f-button>
              <f-button prefix-icon="Instagram"
                >Continue with Instagram</f-button
              >
            </f-input-container>
            <f-input-container label="Open">
              <f-button prefix-icon="Twitter">Open in Twitter</f-button>
              <f-button prefix-icon="Pinterest">Open in Pinterest</f-button>
            </f-input-container>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Selects -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Selects">
            <f-input-container label="Default style select">
              <f-select
                v-model="select"
                :items="[
                  { title: 'Tailwind CSS', value: 1 },
                  { title: 'Force UI', value: 2 }
                ]"
                placeholder="Select item"
              />
            </f-input-container>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Dropdowns -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Dropdowns">
            <f-input-container label="Default style dropdown">
              <f-dropdown suffix-icon="ArrowDown" />

              <f-dropdown placeholder="Filter">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam animi, laudantium ipsa velit rem, nostrum
                  necessitatibus, aliquam eos error perspiciatis cupiditate
                  culpa provident perferendis? Quos exercitationem accusamus
                  animi quaerat expedita!
                </div>
              </f-dropdown>
            </f-input-container>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Checkboxes -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Checkboxes">
            <f-input-container label="Agreements">
              <f-checkbox>I agree with privacy policy & terms</f-checkbox>
            </f-input-container>
            <f-input-container label="Notifications">
              <f-checkbox>
                Email notification
                <p slot="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, numquam magni. Debitis sapiente sit..
                </p>
              </f-checkbox>
              <f-checkbox>SMS notification</f-checkbox>
            </f-input-container>
          </f-form-flex-container>
          <f-divider />
          <f-form-flex-container title="Radios">
            <f-input-container label="Sex">
              <f-radio v-model="radio" label="1">Man</f-radio>
              <f-radio v-model="radio" label="2" class="ml-2">Woman</f-radio>
            </f-input-container>
            <f-input-container label="Block radios">
              <f-radio v-model="radio" full label="1">Man</f-radio>
              <f-radio v-model="radio" full label="2">Woman</f-radio>
            </f-input-container>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Inputs -->
      <f-container>
        <f-form-container type="error">
          <f-form-flex-container title="Inputs">
            <f-input-container label="Small size input">
              <f-input v-model="input" size="small" />
            </f-input-container>
            <f-input-container label="Default size input">
              <f-input v-model="input" size="medium" />
            </f-input-container>
            <f-input-container label="Large size input">
              <f-input v-model="input" size="large" />
            </f-input-container>
          </f-form-flex-container>
          <f-divider />

          <f-form-flex-container title="Inline inputs">
            <div class="flex space-x-2">
              <f-input-container required label="First name">
                <f-input />
              </f-input-container>
              <f-input-container label="Last name">
                <f-input />
              </f-input-container>
            </div>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Modals -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Modals">
            <f-input-container label="Right-side slide">
              <f-button @click="slide = true">Open</f-button>
            </f-input-container>
            <f-input-container label="Bottom to up dialog">
              <f-button plain @click="dialog = true">Open</f-button>
            </f-input-container>
            <f-input-container label="Center modal">
              <f-button color="black" @click="modal = true">Open</f-button>
            </f-input-container>
          </f-form-flex-container>

          <f-slide v-model="slide" title="Slider">
            <f-slide-item>Home</f-slide-item>
            <f-slide-item>Components</f-slide-item>
            <f-slide-item>Examples</f-slide-item>
          </f-slide>
          <f-dialog v-model="dialog"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vel
            esse commodi impedit quia accusamus vitae distinctio aspernatur
            similique sunt perspiciatis corrupti, consectetur odio perferendis
            nisi soluta, id eligendi doloremque.</f-dialog
          >

          <f-modal v-model="modal" @on-confirm="modal = false">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo
              veritatis, ipsa, autem architecto, porro natus excepturi
              reiciendis quisquam obcaecati magnam minima! Sed non consequuntur,
              repellendus velit veniam commodi odit?
            </p>
          </f-modal>
        </f-form-container>
      </f-container>

      <!-- Anchors (Links) -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Anchors">
            <f-input-container label="Default style link">
              Lorem ipsum dolor sit, <f-link href="/labs">Default</f-link> amet
              consectetur adipisicing elit. Harum dicta quasi a quis ullam quia,
              distinctio ab saepe voluptatibus ipsam vero. Modi autem tempore
              laboriosam voluptates, eaque error nostrum voluptas.
            </f-input-container>
            <f-input-container label="Button style link">
              <f-link href="/labs" type="button">Button link</f-link>
            </f-input-container>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Tags -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Tags">
            <f-input-container label="Default style">
              <f-tag>Salt</f-tag>
              <f-tag plain>Salt & Pepper</f-tag>
              <f-tag type="black">Pepper</f-tag>
            </f-input-container>
            <f-input-container label="Info">
              <f-tag type="info">Blueberry</f-tag>
              <f-tag type="info" plain>Blueberry</f-tag>
              <f-tag type="info" plain no-border>Blueberry</f-tag>
            </f-input-container>
            <f-input-container label="Success">
              <f-tag type="success">Melon</f-tag>
              <f-tag type="success" plain>Melon</f-tag>
              <f-tag type="success" plain no-border>Melon</f-tag>
            </f-input-container>
            <f-input-container label="Warning">
              <f-tag type="warning">Banana</f-tag>
              <f-tag type="warning" plain>Banana</f-tag>
              <f-tag type="warning" plain no-border>Banana</f-tag>
            </f-input-container>
            <f-input-container label="Error">
              <f-tag type="error">Apple</f-tag>
              <f-tag type="error" plain>Apple</f-tag>
              <f-tag type="error" plain no-border>Apple</f-tag>
            </f-input-container>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Images -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Images">
            <f-input-container label="Thumbnail image">
              <f-image
                src="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
              />
            </f-input-container>
            <f-button>Change</f-button>
          </f-form-flex-container>
        </f-form-container>
      </f-container>

      <!-- Copyrights -->
      <f-container>
        <f-form-container>
          <f-form-flex-container title="Copyright">
            <f-copyright title="Force UI" />
          </f-form-flex-container>
        </f-form-container>
      </f-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      checkbox: null,
      select: null,
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
