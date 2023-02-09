interface Order {
  id: number;
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
