package com.company;

public class HealthyEmployee implements EmployeeStrategy{
    @Override
    public void work() {
        System.out.println("I am healthy, I can work.");
    }

    @Override
    public void sendEmail() {
        System.out.println("I am healthy, I can send emails.");
    }
}
