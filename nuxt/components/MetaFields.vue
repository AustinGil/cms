<template>
  <div class="meta-fields">
    <div v-for="(field, index) in fields" :key="index" class="meta-field">
      <v-text-field
        v-if="field.type === 'text'"
        :label="field.label"
        :required="field.required">
      </v-text-field>

      <v-radio-group
        v-if="field.type === 'radio'"
        :mandatory="field.required">
        <v-radio
          v-for="(option, index) in field.options"
          :key="index"
          :label="option.label"
          :value="option.value"></v-radio>
      </v-radio-group>

      <v-select
        v-if="field.type === 'select' && field.options.length"
        :items="field.options"
        :label="field.label"
        :required="field.required">
      </v-select>

      <v-checkbox
        v-if="field.type === 'checkbox'"
        :label="field.label"
        :required="field.required">
      </v-checkbox>

      <v-switch
        v-if="field.type === 'switch'"
        :label="field.label"
        :required="field.required">
      </v-switch>

      <v-text-field
        v-if="field.type === 'textarea'"
        :label="field.label"
        :required="field.required"
        multi-line>
      </v-text-field>
    </div>
  </div>
</template>

<script>
import MetaFieldText from "./MetaFieldText";

var Child = {
  template: "<div>A custom component!</div>"
};

export default {
  props: ["fields"],

  methods: {},

  components: {
    Child,
    MetaFieldText
  }
};
</script>

<style>

</style>
