package org.baedareun.minjok.enums;

public enum TagType {
    SOFT("부드러운");

    final private String name;

    TagType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
