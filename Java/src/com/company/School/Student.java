package com.company.School;

public abstract class Student {
    private String name;

    public abstract String passYear();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
