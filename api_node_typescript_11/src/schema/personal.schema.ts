import { z } from "zod";

const telefonoRegEx = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
// const nombreRegEx = new RegExp(/^(A-Z|a-z{200})+$/);
// Validaciones con Zod - constuir schema
export const personaSchema = z
  .object({
    nombre: z
      .string()
      .min(2, "Minimo 2 caracteres")
      .max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2).max(200),
    telefono: z.string().regex(telefonoRegEx),
    estatus: z.number().int().positive(),
    //   .min(1)
    //   .max(2, "Los valores correctos son 1 y 2"),
  })
  .refine((data) => data.direccion == "TEC DE CULIACAN", {
    message: "La direccion debe ser del TEC DE CULIACAN",
    path: ["direccion"],
  })
  .refine((data) => data.estatus <= 2, {
    message: "Los valores correctos son 1 (Vigente) y 2 (Baja)",
    path: ["estatus"],
  })
  .or(
    z.object({
      telefono: z.string().min(10).max(15),
    })
  )
  .or(
    z.object({
      id: z.number().int().positive().min(1).max(9999),
    })
  );

export const personaNuevoSchema = z
  .object({
    id: z.number().int().positive(),
    nombre: z
      .string()
      .min(2, "Minimo 2 caracteres")
      .max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2).max(200),
    telefono: z.string().regex(telefonoRegEx),
    estatus: z.number().int().positive(),
    // estatus: z.string(),

    //   .min(1)
    //   .max(2, "Los valores correctos son 1 y 2"),
  })
  .refine((data) => data.direccion == "TEC DE CULIACAN", {
    message: "La direccion debe ser del TEC DE CULIACAN",
    path: ["direccion"],
  })
  .refine((data) => data.estatus <= 2, {
    message: "Los valores correctos son 1 (Vigente) y 2 (Baja)",
    path: ["estatus"],
  });
