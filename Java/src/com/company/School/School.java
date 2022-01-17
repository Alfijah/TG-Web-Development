package com.company.School;

public class School {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        FirstYear firstYearStudent = new FirstYear();
        System.out.println(firstYearStudent.passYear());
    }
}
