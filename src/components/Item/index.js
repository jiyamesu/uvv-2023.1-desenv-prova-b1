import { Button } from 'react-native';
import { Image, Text, View } from 'react-native';

import styles from "./styles"

function Item(props) {
    return(
        <View>
            <Image style={styles.img} source={{uri: props.itens.img}}/>
            <Text style={styles.itemName}>{props.itens.nome}</Text>
            <Text style={styles.itemDescription}>{props.itens.descricao}</Text>
            <Button style={styles.btnTrocar}>Trocar!</Button>
        </View>
    );
};

export default Item;
