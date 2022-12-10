package com.example.restapi.service.impl;

import com.example.restapi.model.Item;
import com.example.restapi.repository.ItemRepository;
import com.example.restapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    @Autowired
    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
    @Override
    public void save(Item item) {
        itemRepository.save(item);
    }

    @Override
    public Iterable<Item> getItems() {
        return itemRepository.findAll();
    }

    @Override
    public void deleteById(long id) {
        itemRepository.deleteById(id);
    }
}
