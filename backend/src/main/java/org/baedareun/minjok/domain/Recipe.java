package org.baedareun.minjok.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_id")
    private int id;

    private String name;
    private String description;
    private String tip;

    @Column(name = "final_photo_url")
    private String finalPhotoUrl;

    @Column(name = "like_count")
    private int likeCount;
}
