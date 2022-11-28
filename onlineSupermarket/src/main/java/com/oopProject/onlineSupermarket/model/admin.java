package com.oopProject.onlineSupermarket.model;

public class admin extends manager{
    public admin(String userName, String userId, long phoneNumber, String address, String emailId, String password) {
        super(userName, userId, phoneNumber, address, emailId, password);
    }
    public void viewUser(String userId){
        //return all data values of that particular user mongo se JSON form me sari values convert karke send...
    }
    public void deleteUser(String userId){
        //delete that particular object from mongodb table users
    }
    public void salesOverview(){
        //return the full mongo table orders in JSON format
    }
    public void orderHistory(String userId){
        // Returns from orders table all the orders of corresponding userId
    }
    public void stockStatus(String itemName){
        //Returns from table the stock value of corresponding itemName
    }
}
