import Modify from "./Modify";

interface Order {
  created_at: string | number | Date;
  _id: string;
  title: string;
  author: string;
  dateCurrent: Date;
  estimatedTime: number;
  description: string;
  deadLine: Date;
  employee: "Ilay" | "Vero" | "Gabi" | "Dario" | "Flor" | "Fran";
  budget: number;
  stateOrder:
    | "Finished"
    | "Delivered"
    | "Canceled"
    | "En Proceso"
    | "Terminados"
    | "Entregados"
    | "Anulados"
    | "In Process";
  cashAdvance: number;
  phone: string;
  changeDeadLine?: Date;
  previewDate?: Date;
  comment?: string;
  employeeCharge?: "Ilay" | "Vero" | "Gabi" | "Dario" | "Flor" | "Fran";
  modify?: Modify[];
}

export default Order;
