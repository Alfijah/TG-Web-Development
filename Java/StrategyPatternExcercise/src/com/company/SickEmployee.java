package com.company;

public class SickEmployee implements EmployeeStrategy{
    @Override
    public void work() {
        System.out.println("I am sick, can't work.");
    }

    @Override
    public void sendEmail() {
        System.out.println("I am sick, but I can send emails.");
    }
}
