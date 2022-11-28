package com.oopProject.onlineSupermarket.model;
import java.time.LocalDate;
public class order {
    public String date;
    public String address;
    LocalDate newDate = LocalDate.now(); // Create a date object

    public String userName;
    public String itemId;
    public String deliveryDate;
    public boolean isDelivered;
    public String orderId;
    public order(String address, String userName, String itemId) {
        this.date = String.valueOf(newDate);
        this.orderId= date + userName + itemId;
        this.address = address;
        this.userName = userName;
        this.itemId=itemId;
        this.deliveryDate=String.valueOf(newDate.plusDays(3));
        this.isDelivered=false;
    }
    public void currentOrders(){
        // Returns from table all the orders of userId with isDelivered false value
        // if check karna not easy just return all orders of corresponding user
    }
    public void orderHistory(){
        // Returns from table all the orders of userId with isDelivered true value
        // if check karna not esy just return all orders of corresponding user
    }
}
