package com.example.restapi.controller;

import com.example.restapi.model.Item;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MainRestController {

    private final List<Item> items = Arrays.asList(
            new Item("First post"),
            new Item("Second post")
    );

    @GetMapping("/items")
    private Iterable<? extends Item> getItems(){
        return items;
    }
}
