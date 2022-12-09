package com.example.restapi.controller;

import com.example.restapi.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MainRestController {
    private List<Item> items;

    public MainRestController() {
        items = new ArrayList<>();
        items.add(new Item("First post"));
        items.add(new Item("Second post"));
        items.add(new Item("Third post"));
    }

    @GetMapping("/items")
    private Iterable<? extends Item> getItems(){
        return items;
    }

    @PostMapping("/add")
    private void addItem(@RequestBody Item item) {
        items.add(item);
    }
}
