import request from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export class getDetailGoods {
  constructor(itemInfo, columns) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
  }
}

export class getShop {
  constructor(services) {
    this.services = services;
  }
}
