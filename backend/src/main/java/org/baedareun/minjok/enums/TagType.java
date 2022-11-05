package org.baedareun.minjok.enums;

import java.util.Arrays;
import java.util.Objects;

public enum TagType {
    SOFT("부드러운"),
    SWEET("달달한");

    final private String name;

    TagType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public static TagType of(String type) {
        return Arrays.stream(TagType.values())
            .filter(tagType -> Objects.equals(tagType.name, type))
            .findFirst()
            .get();
    }
}
