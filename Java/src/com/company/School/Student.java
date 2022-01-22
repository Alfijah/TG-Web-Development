package com.company.School;

import java.util.ArrayList;
import java.util.Arrays;

public abstract class Student {
    private String name;
    private int[] grades;
    private String[] subject;

    public String[] getSubjects() {
        return subjects;
    }
    
    public Student(String name, String remark) {
        this.name = name;
        System.out.println("Student " + name + ": " + remark + ".");
    }

    public Student(String schoolYear) {
        System.out.println("Students from the "+ schoolYear + " are following the classes: " +
                Arrays.toString(subjects) + ".");
    }

    public Student(String name, int[] grades) {
        this.name = name;
        this.grades = grades;
        System.out.println("The Student " + name + " has the following grades: " + Arrays.toString(grades) + ".");
    }

    public abstract String passYear();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
