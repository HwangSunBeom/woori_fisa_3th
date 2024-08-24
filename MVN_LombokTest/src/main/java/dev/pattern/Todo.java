package dev.pattern;

import lombok.Builder;
import lombok.ToString;

import java.time.LocalDate;

@Builder
@ToString
public class Todo {
    private int id;
    private String title; // 할 일 제목
    private String description; // 할 일 내용
    private LocalDate dueDate; // 할 일 마감기간
    private boolean isCompleted; // 진행 여부

    public Todo(Builder builder) {
        this.id = builder.id;
        this.title = builder.title;
        this.description = builder.description;
        this.dueDate = builder.dueDate;
        this.isCompleted = builder.isCompleted;
    }

    public static class Builder {
        private int id;
        private String title; // 할 일 제목
        private String description; // 할 일 내용
        private LocalDate dueDate; // 할 일 마감기간
        private boolean isCompleted; // 진행 여부

        public Builder(int id) {
            this.id = id;
        }

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public Builder description(String description) {
            this.description = description;
            return this;
        }

        public Builder dueDate(LocalDate dueDate) {
            this.dueDate = dueDate;
            return this;
        }

        public Builder isCompleted(boolean isCompleted) {
            this.isCompleted = isCompleted;
            return this;
        }

        public Todo build() {
            return new Todo(this);
        }
    }

}
