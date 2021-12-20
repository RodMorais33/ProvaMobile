import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export default function Poderes({ navigation, route }) {
    const [detalhe, setDetalhe] = useState({
        "name": "",
        "abilities": [],
        "sprites": {
            "other":{
                "official-artwork":{
                    "front_default":""
                }
            }
        },
    });

    const { name } = route.params;

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/"+ name;

        fetch(url)
            .then(resp => { return resp.json(); })
            .then(data => { (data.sprites.other["official-artwork"].front_default)
                setDetalhe(data); 
            })
    }, []);

    return (
        <View>
            <Image source={{ uri: detalhe.sprites.other["official-artwork"].front_default }} /> 
            { 
                detalhe.abilities.map((item, index) => {
                    return (                     
                          <Text key={index}> {item.ability.name}  </Text>           
                        )
                })
            } 
        </View>
    );
}