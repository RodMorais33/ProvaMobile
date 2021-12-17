import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import style from './style.js'

export default function Pedido({ navigation, route }) {
    const [pedido, setPedido] = useState([{
        "id_entrega": null,
        "id_entregador": id_entregador,
        "cliente": "",
        "endereco": "",
        "produto": "",
        "valor": 0,
        "data": "0000-00-00",
        "hora": null
    }]);

    const { id_entregador } = route.params;

    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores/" + id_entregador;

        fetch(url)
            .then(resp => { return resp.json(); })
            .then(data => { setPedido(data); })
    }, []);

    return (
        <View>
            {
                pedido.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => { navigation.navigate("Detalhe", item)}}>
                            <Text>{item.endereco}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}