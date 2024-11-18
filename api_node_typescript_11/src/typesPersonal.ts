export interface Personal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  estatus: string;
}

export type PersonalNuevo = Omit<Personal, "id">;
