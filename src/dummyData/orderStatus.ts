import { Truck } from "react-feather";

const orderStatus = [
  {
    label: "Open Orders",
    count: 239,
    border: "border-t-[#FFAA2C]",
    icon: "open-order.svg",
  },
  {
    label: "Orders in transit",
    count: 126,
    border: "border-t-[#2C67FF]",
    icon: "in-transit-order.svg",
  },
  {
    label: "Fulfilled orders",
    count: 1254,
    border: "border-t-[#00CF3A]",
    icon: "fulfilled-order.svg",
  },
  {
    label: "Cancelled orders",
    count: 35,
    border: "border-t-[#FF1C1C]",
    icon: "cancel-order.svg",
  },
] as const;

// array of order status
export default orderStatus;
