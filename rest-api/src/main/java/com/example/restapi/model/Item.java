package com.example.restapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Item {
    @Id
    @GeneratedValue
    private long id;
    private String text;

    public Item(long id, String text) {
        this.id = id;
        this.text = text;
    }

    public Item(String text) {
        this.text = text;
    }

    public Item() {

    }

    public String getText() {
        return text;
    }
    public long getId() {
        return id;
    }
}
