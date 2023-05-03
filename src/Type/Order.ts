interface Order {
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
    | "In Process"
    | "Finished"
    | "Delivered"
    | "Canceled"
    | "En Proceso"
    | "Terminados"
    | "Entregados"
    | "Anulados";
  comment?: string;
  dateChange?: Date;
  cashAdvance: number;
  phone: number;
}

export default Order;
