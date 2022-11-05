package org.baedareun.minjok.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id")
    private int id;

    private String type;
    private String name;
    private String description;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "is_user_add")
    private boolean isUserAdd;

}
