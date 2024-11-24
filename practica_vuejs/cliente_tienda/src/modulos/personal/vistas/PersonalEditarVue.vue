<template>
  <div class="container mt-5" v-if="personal[0]">
    <div class="card">
      <div class="card-header">
        <h4>Editar personal</h4>
      </div>
      <div v-if="mensaje == 1" class="alert alert-success" role="alert">
        Datos actualizados con exito
      </div>
      <div class="card-body">
        <Form :validation-schema="PersonalSchema" @submit="onTodoBien">
          <div class="mb-3">
            Id
            <input
              type="text"
              class="form-control"
              v-model="personal[0].id"
              disabled
            />
          </div>
          <div class="mb-3">
            Nombre
            <Field
              name="nombre"
              type="text"
              class="form-control"
              v-model="personal[0].nombre"
            />
            <ErrorMessage name="nombre" class="errorValidacion" />
          </div>
          <div class="mb-3">
            Direccion
            <Field
              name="direccion"
              type="text"
              class="form-control"
              v-model="personal[0].direccion"
            />
            <ErrorMessage name="direccion" class="errorValidacion" />
          </div>
          <div class="mb-3">
            Telefono
            <Field
              name="telefono"
              type="text"
              class="form-control"
              v-model="personal[0].telefono"
            />
            <ErrorMessage name="telefono" class="errorValidacion" />
          </div>
          <div class="mb-3">
            Estatus
            <Field
              name="estatus"
              type="text"
              class="form-control"
              v-model="personal[0].estatus"
            />
            <ErrorMessage name="estatus" class="errorValidacion" />
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">Actualizar</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePersonal } from "../controladores/usePersonal";
import { useRoute } from "vue-router";
import { PersonalSchema } from "../schemas/PersonalSchema";
import { Field, Form, ErrorMessage } from "vee-validate";
const { traePersonalId, mensaje, personal, actualizarPersonal } = usePersonal();
let idPersona = 0;
const route = useRoute();
onMounted(async () => {
  idPersona = Number(route.params.id);
  await traePersonalId(Number(idPersona));
});

const onTodoBien = async () => {
  await actualizarPersonal(personal.value[0]);
};
</script>

<style scoped>
.errorValidacion {
  color: red;
  font-weight: bold;
}
</style>
