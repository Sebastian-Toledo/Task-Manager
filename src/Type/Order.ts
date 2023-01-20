interface Order {
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
}

export default Order;
