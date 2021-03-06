package com.company.School;

import java.util.ArrayList;

public abstract class Student {
    private String name;
    private String[] subjects;
    private int[] grades;
    private ArrayList<String> remarksList;
    private String schoolYear;

    public Student(){}

    public Student(String name, String[] subjects) {
        this.name = name;
        this.subjects = subjects;
        this.remarksList = new ArrayList<String>();
    }

    public String passYear() {
        for (int grade : getGrades()) {
            if (grade == 4) {
                return "Unfortunately, you have not passed this year.";
            }
        }
        return "Congratulations, you have passed this year!";
    }

    public String getName() {
        return name;
    }

    public String[] getSubjects() {
        return subjects;
    }

    public int[] getGrades() {
        return grades;
    }

    public ArrayList<String> getRemarksList() {
        return remarksList;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGrades(int... grades) {
        this.grades = grades;
    }

    public void setRemarksList(String remarks) {
        this.remarksList.add(remarks);
    }

    public String[] updateSubjects(int index, String subjectName) {
        subjects[index] = subjectName;
        return subjects;
    }
}
