package com.company.School;

import java.util.ArrayList;

public class FirstYearStudent extends Student {
    public String[] subjects = new String[]{"English", "Dutch", "Math", "Biology", "Geography"};
    private int[] grades;
    private ArrayList<String> remarksList = new ArrayList<>();
    private String schoolYear = "first year";

    public FirstYearStudent(){}
    public FirstYearStudent(String name) {
        super(name);
    }

    @Override
    public String passYear() {
        for (int grade : grades) {
            if (grade == 4) {
                return "Unfortunately, you have not passed this year.";
            }
        }
        return "Congratulations, you have passed this year!";
    }

    @Override
    public String[] getSubjects() {
        return subjects;
    }

    @Override
    public int[] getGrades() {
        return grades;
    }

    @Override
    public ArrayList<String> getRemarksList() {
        return remarksList;
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }

    @Override
    public String[] setSubjects(int index, String subjectName) {
        this.subjects[index] = subjectName;
        return subjects;
    }

    @Override
    public void setGrades(int... grades) {
        this.grades = grades;
    }

    @Override
    public String[] updateSubjects(int index, String subjectName) {
       subjects[index] = subjectName;
        return subjects;
    }

    @Override
    public void setRemarksList(String remarks) {
        this.remarksList.add(remarks);
    }
}
