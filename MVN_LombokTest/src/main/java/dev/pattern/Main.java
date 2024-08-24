package dev.pattern;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Todo todo = Todo.builder().id(1).title("밥 먹기").build();

        System.out.println(todo);

        Todo.Builder builder = new Todo.Builder(1);
        builder.title("밥 먹기");
        builder.description("얌얌");
        builder.dueDate(LocalDate.of(2024, 10, 20));
        builder.isCompleted(false);
        builder.build();
    }
}
