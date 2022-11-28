package com.oopProject.onlineSupermarket.model;

public class Item {
    public String itemName;
    public String itemId;
    public double price;
    public double offer;
    public double finalCost;
    public int stock;
    public String managerId;

    public Item(String itemName, double price, double offer, int stock, String managerId) {
        this.itemName = itemName;
        this.itemId=itemName+managerId;
        this.price = price;
        this.offer = offer;
        this.stock = stock;
        this.managerId = managerId;
        this.finalCost=price-offer;
    }

}
