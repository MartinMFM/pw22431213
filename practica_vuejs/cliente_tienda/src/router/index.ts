import PersonalAgregarVue from "@/modulos/personal/vistas/PersonalAgregarVue.vue";
import PersonalBorrarVue from "@/modulos/personal/vistas/PersonalBorrarVue.vue";
import PersonalEditarVue from "@/modulos/personal/vistas/PersonalEditarVue.vue";
import PersonalVue from "@/modulos/personal/vistas/PersonalVue.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: "/personal",
      name: "personal",
      component: PersonalVue,
    },
    {
      path: "/personal/agregar",
      name: "personalAgregar",
      component: PersonalAgregarVue,
    },
    {
      path: "/personal/:id/editar",
      name: "personalEditar",
      component: PersonalEditarVue,
    },
    {
      path: "/personal/:id/borrar",
      name: "personalBorar",
      component: PersonalBorrarVue,
    },
  ],
});

export default router;
