package com.company;

public class DisconnectedEmployee implements EmployeeStrategy{
    @Override
    public void work() {
        System.out.println("I can work when disconnected.");
    }

    @Override
    public void sendEmail() {
        System.out.println("I can't send emails when disconnected.");
    }
}
