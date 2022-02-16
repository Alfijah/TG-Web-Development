package com.codeWithMosh;

import com.codeWithMosh.memento.Editor;
import com.codeWithMosh.memento.History;
import com.codeWithMosh.state.Canvas;
import com.codeWithMosh.state.EraserTool;
import com.codeWithMosh.state.SelectionTool;
import com.codeWithMosh.state.TestStatic;
import com.codeWithMosh.state.abuse.Stopwatch;

public class Main {
    public static TaxCalculator getCalculator() {
        return new TaxCalculator2019();
    }

    //
    public static void drawUIControl(UIControl control) {
        control.draw();
    }

    public static void main(String[] args) {
        User user = new User("Alfi");
        user.sayHello();

        //
        TaxCalculator calculator = getCalculator();

        //
        var account = new Account();
        account.deposit(10);
        account.withdraw(5);
        System.out.println(account.getBalance());

        //MailService
        var mailService = new MailService();
        mailService.sendEmail();

        //UIControl, TextBox, Checkbox
        var textBox = new TextBox();
        textBox.enable();
        drawUIControl(new TextBox());

        //Editor
        var editor = new Editor();
        var history = new History();

        editor.setContent("a");
        history.push(editor.createState());

        editor.setContent("b");
        history.push(editor.createState());

        editor.setContent("c");
        editor.restore(history.pop());
        editor.restore(history.pop());

        System.out.println(editor.getContent());

        //Canvas
        var canvas = new Canvas();
        canvas.setCurrentTool(new EraserTool());
        canvas.mouseDown();
        canvas.mouseUp();

        //Stopwatch
        var stopwatch = new Stopwatch();
        stopwatch.click();
        stopwatch.click();

        //TestStatic
        TestStatic object = TestStatic.getObj();
    }
}
