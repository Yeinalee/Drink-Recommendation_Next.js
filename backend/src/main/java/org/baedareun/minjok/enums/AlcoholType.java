package org.baedareun.minjok.enums;

import java.util.Arrays;
import java.util.Objects;

public enum AlcoholType {
    SOJU("소주", "soju.png"),
    WINE("와인", "wine.png"),
    WESTERN("양주", "western.png"),
    MAKGEOLLI("막걸리", "makgeolli.png"),
    CHAMPAGNE("샴페인", "champagne.png"),
    BEER("맥주", "beer.png");

    final private String name;
    final private String photoUrl;

    AlcoholType(String name, String photoUrl) {
        this.name = name;
        this.photoUrl = photoUrl;
    }

    public String getName() {
        return name;
    }

    public String getPhotoUrl() {
        return "https://knowalcohol.s3.ap-northeast-2.amazonaws.com/static/alcohols/types/" + photoUrl;
    }

    public static AlcoholType of(String type) {
        return Arrays.stream(AlcoholType.values())
            .filter(alcoholType -> Objects.equals(alcoholType.name, type))
            .findFirst()
            .get();
    }
}
