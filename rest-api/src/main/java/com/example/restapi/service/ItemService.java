package com.example.restapi.service;

import com.example.restapi.model.Item;
import org.springframework.stereotype.Service;

@Service
public interface ItemService {
    void save(Item item);

    Iterable<Item> getItems();

    void deleteById(long id);

    void buy(long id);
}
