import Order from "./Order";

interface Modify {
  created_at: string | number | Date;
  _id: string;
  comment: string;
  employeeCharge: string;
  order: Order;
}

export default Modify;
