import mysql from "mysql2/promise";
import { Personal, PersonalNuevo } from "../typesPersonal";
import { personaNuevoSchema, personaSchema } from "../schema/personal.schema";

const conexion = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pw2024",
});

export const obtienePersonal = async () => {
  try {
    const [results] = await conexion.query("SELECT * FROM personal");
    return results;
  } catch (err) {
    return { error: "No se puede obtener el personal." };
    // return { error: (err as Error).message };
  }
};

export const encuentraPersonal = async (id: number) => {
  try {
    const [results] = await conexion.query(
      "SELECT * FROM personal WHERE id = ? LIMIT 1",
      id
    );
    return results;
  } catch (err) {
    return { error: "No se encuentra ese personal." };
  }
};

export const agregarPersonal = async (nuevo: PersonalNuevo) => {
  try {
    const validacion = personaSchema.safeParse(nuevo);
    if (!validacion.success) {
      return { error: validacion.error };
    }
    const [results] = await conexion.query(
      "INSERT INTO personal(nombre, direccion, telefono, estatus) values(?,?,?,?)",
      [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]
    );
    return results;
  } catch (err) {
    return "No se puede agregar el personal";
  }
};

export const modificarPersonal = async (nuevo: Personal) => {
  try {
    const validacion = personaNuevoSchema.safeParse(nuevo);
    if (!validacion.success) {
      return { error: validacion.error };
    }
    const [results] = await conexion.query(
      "UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?",
      [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus, nuevo.id]
    );
    return results;
  } catch (err) {
    return { error: "No se puede modificar el personal" };
  }
};

export const borrarPersonal = async (id: number) => {
  try {
    const [results] = await conexion.query(
      "DELETE FROM personal WHERE id = ?",
      [id]
    );
    return results;
  } catch (err) {
    return { error: "No se puede borrar el personal" };
  }
};
