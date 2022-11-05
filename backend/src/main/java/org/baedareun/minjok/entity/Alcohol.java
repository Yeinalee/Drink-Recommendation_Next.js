package org.baedareun.minjok.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.baedareun.minjok.enums.AlcoholType;

@Getter
@Entity
@NoArgsConstructor
public class Alcohol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String name;

    @Column
    private AlcoholType alcoholType;

    @Column
    private String description;

    @Column
    private String photo;
}
