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
    private boolean isPurchased;

    public Item(long id, String text, boolean isPurchased) {
        this.id = id;
        this.text = text;
        this.isPurchased = isPurchased;
    }

    public Item(String text) {
        this.text = text;
    }

    public Item() {
    }

    public void buy() {
        isPurchased = true;
    }

    public String getText() {
        return text;
    }

    public long getId() {
        return id;
    }

    public boolean isPurchased() {
        return isPurchased;
    }

}
