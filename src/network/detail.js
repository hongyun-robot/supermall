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
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class getShop {
  constructor(shopInfo) {
    this.allGoodsUrl = shopInfo.allGoodsUrl;
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}
