package com.oopProject.onlineSupermarket.model;

public class manager extends user {
    public manager(String userName, String userId, long phoneNumber, String address, String emailId, String password) {
        super(userName, userId, phoneNumber, address, emailId, password);
    }
    public void allItems(String userId){
        //returns all itemID having same userID/manager
    }
    public void addItem(String itemName, double price, double offer, int stock, String managerId){
        //take all item Items from frontend
        Item newProduct= new Item(itemName, price, offer, stock, managerId);
        //push newProduct object in mongodb in Items table
    }
    public void deleteItem(String itemName){
        //delete that item object from mongodb table item
    }
    public void updatePrice(String itemName, double newPrice ){
        //update price field for that particular itemName
    }
    public void updateOffer(String itemName, double newOffer ){
        //update offer field for that particular itemName
    }
    public void updateStock(String itemName, int newStock){
        //update Stock field for that particular itemName
    }
}
