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

    public String[] setSubjects(int index, String subjectName) {
        this.subjects[index] = subjectName;
        return subjects;
    }

    public void setGrades(int[] grades) {
        this.grades = grades;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String[] updateSubjects(int index, String subjectName) {
        subjects[index] = subjectName;
        return new String[5];
    }
}
