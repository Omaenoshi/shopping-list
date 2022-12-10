package com.example.restapi.controller;

import com.example.restapi.model.Item;
import com.example.restapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ItemRestController {
    private final ItemService itemService;

    @Autowired
    public ItemRestController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/items")
    private Iterable<? extends Item> getItems(){
        return null;
    }

    @PostMapping("/add")
    private void addItem(@RequestBody Item item) {

    }
}
