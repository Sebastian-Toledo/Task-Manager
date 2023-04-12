interface Order {
  _id: string;
  title: string;
  author: string;
  dateCurrent: Date;
  estimatedTime: number;
  description: string;
  deadLine: Date;
  employee: string;
  budget: number;
  stateOrder: string;
  comment?: string;
  dateChange?: Date;
  cashAdvance: number;
  phone: number;
}

export default Order;
