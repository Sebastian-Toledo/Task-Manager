interface Order {
  id: number;
  title: string;
  author: string;
  dateCurrent: Date;
  estimatedTime: number;
  description: string;
  deadline: Date;
  employee: string;
  budget: string;
  stateOrder: string;
  comment?: string;
  dateChange?: Date;
  sign: number;
  phone: number;
}

export default Order;
