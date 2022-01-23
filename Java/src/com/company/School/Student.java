package com.company.School;

public abstract class Student {
    private String name;
    private String[] subjects;
    private int[] grades;
    private String remarks;
    private String schoolYear;

    public Student(){}

    public Student(String name) {
        this.name = name;
    }

    public abstract String passYear();

    public String getName() {
        return name;
    }

    public String[] getSubjects() {
        return subjects;
    }

    public int[] getGrades() {
        return grades;
    }

    public String getRemarks() {
        return remarks;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSubjects(String[] subjects) {
        this.subjects = subjects;
    }

    public void setGrades(int[] grades) {
        this.grades = grades;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public void UpdateSubjects(int index, String subjectName) {
        subjects[index] = subjectName;
    }
}
