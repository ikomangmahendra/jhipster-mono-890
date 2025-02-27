package com.mycompany.myapp.domain;

import java.util.UUID;

public class CategoryTestSamples {

    public static Category getCategorySample1() {
        return new Category().id("id1").name("name1");
    }

    public static Category getCategorySample2() {
        return new Category().id("id2").name("name2");
    }

    public static Category getCategoryRandomSampleGenerator() {
        return new Category().id(UUID.randomUUID().toString()).name(UUID.randomUUID().toString());
    }
}
