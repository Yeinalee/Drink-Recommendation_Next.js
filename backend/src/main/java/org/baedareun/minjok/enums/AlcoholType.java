package org.baedareun.minjok.enums;

public enum AlcoholType {
    SOJU("소주", "soju.png"),
    WINE("와인", "wine.png"),
    WESTERN("양주", "western.png"),
    MAKGEOLLI("막걸리", "makgeolli.png"),
    CHAMPAGNE("샴페인", "champagne.png"),
    BEER("맥주", "beer.png");

    final private String name;
    final private String photoKey;

    AlcoholType(String name, String photoKey) {
        this.name = name;
        this.photoKey = photoKey;
    }

    public String getName() {
        return name;
    }

    public String getPhotoKey() {
        return "alcohols/types/" + photoKey;
    }
}
