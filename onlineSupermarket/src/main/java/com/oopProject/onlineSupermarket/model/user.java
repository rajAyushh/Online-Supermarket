package com.oopProject.onlineSupermarket.model;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class user {
    protected String userName;
    protected String userId;
    protected long phoneNumber;
    protected String address;
    protected String emailId;
    private String password;


    public void setPhoneNumber(long phoneNumber) {
        if (phoneNumber<1000000000){
        this.phoneNumber = phoneNumber;}
        else {
            this.phoneNumber=0;
        }
    }

    public user(String userName, String userId, long phoneNumber, String address, String emailId, String password) {
        this.userName = userName;
        this.userId = userId;
        setPhoneNumber(phoneNumber);
        this.address = address;
        this.emailId = emailId;
        try{
        this.password=toHexString(getSHA(password));}
        catch (NoSuchAlgorithmException e) {
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }
    }

    public void login(){
        //get data using JS
        //check data to mongoDb table users
    }
    public void registerCustomer(){
        //get data using JS
        //push data to mongoDb table users
    }
    protected void updateProfile(){
        //take the field to be edited and update
    }
    protected void deleteProfile(){
        //deletes that particular user from mongo
    }
    protected void passwordChange(){
        //get input of new password
        String pass = "";
        try{
            pass=toHexString(getSHA(password));}
        catch (NoSuchAlgorithmException e) {
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }
        //push pass to mongoDB table users
    }

    public static byte[] getSHA(String input) throws NoSuchAlgorithmException
    {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        return md.digest(input.getBytes(StandardCharsets.UTF_8));
    }

    public static String toHexString(byte[] hash)
    {
        BigInteger number = new BigInteger(1, hash);

        StringBuilder hexString = new StringBuilder(number.toString(16));

        while (hexString.length() < 64)
        {
            hexString.insert(0, '0');
        }

        return hexString.toString();
    }
}
